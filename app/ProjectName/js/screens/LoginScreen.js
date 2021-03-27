import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet, Image, ToastAndroid } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar'

import { TGColors, TGText, TGTextInput, TGButton } from '../common'
import TGApiValues from '../TGApiValues'

export default class LoginScreen extends Component {
    style={
        email: "",
        password: ""
    }

    _login = async () => {
        const req = await fetch(`${TGApiValues.baseUrl}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })

        const res = await req.json()

        if (res.data.email) {
            ToastAndroid.show("Welcome!", ToastAndroid.SHORT)
            await AsyncStorage.setItem("@profile", JSON.stringify(res.data))
            this.props.navigation.replace("Home")
        } else {
            ToastAndroid.show("Invalid password or email", ToastAndroid.SHORT)
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <StatusBar 
                    translucent={false} 
                    style="dark" 
                    backgroundColor={TGColors.white} 
                />
                <Image source={require('../../assets/png/icon.png')} style={styles.icon} resizeMode="contain" />
                <TGTextInput
                    value={(value) => this.setState({ email: value}) } 
                    type="emailAddress"
                    keyboard="email-address"
                    placeholder="Email"
                ></TGTextInput>
                <TGTextInput 
                    value={(value) => this.setState({ password: value}) }
                    type="password"
                    password
                    placeholder="Password"
                ></TGTextInput>
                <TGButton onPress={this._login}>Login</TGButton>
                <TGButton textOnly onPress={() => this.props.navigation.replace("SignUp")}>Don't Have an Account?</TGButton>

                <TGText 
                    style={styles.bannerText} 
                    medium
                >
                    (This prototype was made only for demonstration purposes) Hack Made For HackOr
                </TGText>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: TGColors.white,
        justifyContent: 'center', alignItems: 'center'
    },
    bannerText: {
        color: TGColors.lightText,
        width: 300,
        textAlign: 'center'
    },
    icon: {
        height: 70,
        marginVertical: 40
    }
})