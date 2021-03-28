import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { 
    View, 
    StyleSheet, 
    SafeAreaView, 
    ScrollView, 
    Image, 
    TouchableOpacity, 
    ToastAndroid,
    ActivityIndicator
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import { TGAgeInput, TGButton, TGColors, TGOptionButton, TGProfileImage, TGText, TGTextInput } from '../common'
import TGNavBar from '../TGNavBar'
import api from '../api'

export default class DoctorScreen extends Component {
    state = {
        token: null,
        userId: null,

        gender: 1,  // male = 1  female = 2
        healthStatus: 0, // healthy = 1 be careful = 2 high risk = 3

        age: null,
        name: null,

        avatar: null,

        loading: false
    }

    componentDidMount() {
        try {
            this.setState({ 
                gender: this._getGenderNumber(this.props.route.params.user.gender),
                healthStatus: TGColors.stringToNumberStatus(this.props.route.params.user.status),
                token: this.props.route.params.token,
                userId: this.props.route.params.user.id,
            })
        } catch(err) {}
    }

    pickImage = async () => {
        //let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [ 1, 1 ],
            quality: 1
        })
    
        console.log(result)
    
        if (!result.cancelled) {
            this.setState({ avatar: result.uri })
        }
        
    }

    _getGenderNumber(gender) {
        switch (gender) {
            case "male":
                return 1
            case "female":
                return 2
            default:
                return 1
        }
    }

    _statusToString(status) {
        switch (status) {
            case 0:
                return "sick"
            case 1:
                return "no_vaccinated"
            case 2:
                return "half_vaccinated"
            case 3:
                return "vaccinated"
            default: 
                return "sick"
        }
    }

    _genderToString(gender) {
        switch (gender) {
            case 1:
                return "male"
            case 2:
                return "female"
            default: 
                return "male"
        }
    }

    _uploadChanges = async () => {
        this.setState({ loading: true })
        await api.doctor.editUser(this.state.token, this.state.userId, {
            name: this.state.name,
            avatar: this.state.avatar,
            status: this._statusToString(this.state.healthStatus),
            gender: this._genderToString(this.state.gender),
            age: this.state.age
        })

        this.setState({ loading: false })
        ToastAndroid.show("Changes aplied to profile.", 2000)
        this.props.navigation.replace("Scan")
    }

    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <StatusBar 
                    translucent={false} 
                    style="dark" 
                    backgroundColor={TGColors.white} 
                />
                <View style={{flex: .89}}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{height: '50%'}} contentContainerStyle={styles.scrollView}>
                        <Image resizeMode="contain" style={styles.icon} source={require('../../assets/png/icon.png')} />
                        <TouchableOpacity onPress={this.pickImage} activeOpacity={0.6}>
                            <TGProfileImage status={this.state.healthStatus} url={this.state.avatar || this.props.route.params.user.avatar} />
                        </TouchableOpacity>
                        
                        <TGTextInput value={(value) => this.setState({name: value })} defaultValue={this.props.route.params.user.name || ""} style={{marginTop: 30}} placeholder="Full Name" />

                        <View style={styles.genderSelector}>
                            <TGText style={{marginHorizontal: 10}} medium>Gender</TGText>
                            <TGOptionButton
                                color={TGColors.primary} 
                                label="Male"
                                checked={this.state.gender === 1}
                                onPress={() => this.setState({ gender: 1 })} 
                            />
                            <TGOptionButton
                                color={TGColors.primary} 
                                label="Female"
                                checked={this.state.gender === 2}
                                onPress={() => this.setState({ gender: 2 })} 
                            />
                        </View>

                        <View style={styles.genderSelector}>
                            <TGText style={{marginHorizontal: 20}} medium>Age</TGText>
                            <TGAgeInput value={(value) => this.setState({ age: value })} defaultValue={this.props.route.params.user.age ? this.props.route.params.user.age.toString() : ""} placeholder="Ex. 19" />
                        </View>

                        <TGText style={{marginTop: 15, marginBottom: 10}} medium>Health Status</TGText>
                        <View style={styles.statusSelector}>
                            <TGOptionButton
                                color={TGColors.highRisk} 
                                label="High Risk"
                                checked={this.state.healthStatus === 0}
                                onPress={() => this.setState({ healthStatus: 0 })} 
                            />
                            <TGOptionButton
                                color={TGColors.beCareful} 
                                label="Be Careful"
                                checked={this.state.healthStatus === 1}
                                onPress={() => this.setState({ healthStatus: 1 })} 
                            />
                            <TGOptionButton
                                color={TGColors.healthy} 
                                label="Healthy"
                                checked={this.state.healthStatus === 2}
                                onPress={() => this.setState({ healthStatus: 2 })} 
                            />
                            <TGOptionButton
                                color={TGColors.vaccinated} 
                                label="With Vaccine"
                                checked={this.state.healthStatus === 3}
                                onPress={() => this.setState({ healthStatus: 3 })} 
                            />
                        </View>

                        {
                            !this.state.loading ?
                                <TGButton onPress={this._uploadChanges}>Update Health Status</TGButton>
                            :
                                <ActivityIndicator color={TGColors.primary} size={25} style={{ marginVertical:25 }} />
                        }
                    </ScrollView>
                </View>
                <TGNavBar navigation={this.props.navigation} isDoctor={true} option={3} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: TGColors.white
    },
    scrollView: {
        alignItems: 'center',
        paddingBottom: 20
    }, 
    icon: {
        height: 35,
        marginVertical: 40
    },
    genderSelector: {
        marginVertical: 7,
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusSelector: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 300,
        justifyContent: 'center',
        marginBottom: 20
    }
})