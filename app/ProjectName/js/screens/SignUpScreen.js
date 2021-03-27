import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image, SafeAreaView, StyleSheet, ToastAndroid } from 'react-native'

import { TGColors, TGTextInput, TGButton } from '../common'
import TGApiValues from '../TGApiValues'

export default class SignUpScreen extends Component {
    state = {
        email: "",
        password: "",
        confirmPassword: ""
    }
    
    _signUp = async () => {
        if (this.state.password !== this.state.confirmPassword) {
            ToastAndroid.show("Passwords Must Match", ToastAndroid.SHORT)
        } else {
            const req = await fetch(`${TGApiValues.baseUrl}/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })

            ToastAndroid.show("Account Successfully Created!", ToastAndroid.SHORT)
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
                <Image 
                    resizeMode="contain" 
                    style={styles.icon} 
                    source={require('../../assets/png/icon.png')} 
                />
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
                <TGTextInput 
                    value={(value) => this.setState({ confirmPassword: value}) }
                    type="password"
                    password
                    placeholder="Confirm Password"
                ></TGTextInput>

                <TGButton onPress={this._signUp}>Sign Up</TGButton>
                <TGButton textOnly onPress={() => this.props.navigation.replace("Login")}>Already Have an Account?</TGButton>
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
    icon: {
        height: 70,
        marginVertical: 40
    }
})