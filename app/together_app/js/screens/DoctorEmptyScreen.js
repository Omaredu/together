import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, View, Image, ToastAndroid, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { TGButton, TGColors, TGText } from '../common'
import TGNavBar from '../TGNavBar'
import api from '../api'

import { MaterialCommunityIcons } from '@expo/vector-icons'

export default class DoctorEmpryScreen extends Component {
    state = {
        loading: false
    }

    _createDoctor = async () => {
        this.setState({ loading: true })
        const token = await AsyncStorage.getItem("@token")
        let { errors } = await api.doctor.create(token)

        if (errors[0]) {
            ToastAndroid.show(errors[0], 2000)
            this.setState({ loading: false })
            return
        }

        ToastAndroid.show("Doctor successfully created!", 2000)
        this.setState({ loading: false })
    }

    render() { 
        return (
            <SafeAreaView style={styles.screen}>
                <StatusBar 
                    translucent={false} 
                    style="dark" 
                    backgroundColor={TGColors.white} 
                />

                <Image 
                    resizeMode="contain" 
                    source={require('../../assets/png/icon.png')} 
                    style={styles.icon}
                />

                <View style={styles.content}>
                    <TGText medium style={styles.text}>
                        You can update the health status of your patients by <TGText style={{color: TGColors.primary}} semibold>scanning their together safety code</TGText> and pressing the "update profile" button.
                    </TGText>
                    <MaterialCommunityIcons name="shield-plus-outline" size={50} color={TGColors.primary} />
                    <TGText medium style={styles.text}>
                        At the moment, we are giving free doctor access to anyone <TGText style={{color: TGColors.primary}} semibold>only for testing purposes</TGText> by pressing the button below.
                    </TGText>
                </View>
                {
                    !this.state.loading ? 
                        <TGButton onPress={this._createDoctor}>Become a Doctor</TGButton>
                    :
                        <ActivityIndicator style={{ marginVertical: 25 }} size={30} color={TGColors.primary} />
                }

                <TGNavBar navigation={this.props.navigation} isDoctor={true} option={3} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: TGColors.white,
        alignItems: 'center'
    },
    content: {
        flex: .75,
        alignItems: 'center', justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        width: 250,
        color: TGColors.transparentBlack,
        marginVertical: 15
    },
    icon: {
        height: 35,
        marginVertical: 40
    }
})