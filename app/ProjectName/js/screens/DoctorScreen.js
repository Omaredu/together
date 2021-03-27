import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { 
    View, 
    StyleSheet, 
    SafeAreaView, 
    ScrollView, 
    Image, 
    TouchableOpacity 
} from 'react-native'

import { TGAgeInput, TGButton, TGColors, TGOptionButton, TGProfileImage, TGText, TGTextInput } from '../common'
import TGNavBar from '../TGNavBar'

export default class DoctorScreen extends Component {
    state = {
        gender: 1,  // male = 1  female = 2
        healthStatus: 1 // healthy = 1 be careful = 2 high risk = 3
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
                        <TouchableOpacity activeOpacity={0.6}>
                            <TGProfileImage status={this.state.healthStatus} />
                        </TouchableOpacity>
                        
                        <TGTextInput style={{marginTop: 30}} placeholder="Full Name" />

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
                            <TGAgeInput placeholder="Ex. 19" />
                        </View>

                        <TGText style={{marginTop: 15, marginBottom: 10}} medium>Health Status</TGText>
                        <View style={styles.statusSelector}>
                            <TGOptionButton
                                color={TGColors.healthy} 
                                label="Healthy"
                                checked={this.state.healthStatus === 1}
                                onPress={() => this.setState({ healthStatus: 1 })} 
                            />
                            <TGOptionButton
                                color={TGColors.beCareful} 
                                label="Be Careful"
                                checked={this.state.healthStatus === 2}
                                onPress={() => this.setState({ healthStatus: 2 })} 
                            />
                            <TGOptionButton
                                color={TGColors.highRisk} 
                                label="High Risk"
                                checked={this.state.healthStatus === 3}
                                onPress={() => this.setState({ healthStatus: 3 })} 
                            />
                        </View>

                        <TGButton>Update Health Status</TGButton>
                    </ScrollView>
                </View>
                <TGNavBar navigation={this.props.navigation} option={3} />
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