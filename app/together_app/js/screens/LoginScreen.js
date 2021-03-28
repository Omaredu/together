import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet, Image, ToastAndroid, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar'

import { TGColors, TGText, TGTextInput, TGButton } from '../common'
import api from '../api'

export default class LoginScreen extends Component {
    state={
        email: "",
        password: "",
        loading: false,
        errors: []
    }

    _login = async () => {
        this.setState({ loading: true })
        let { token, errors } = await api.user.signIn(
            this.state.email,
            this.state.password
        )

        if (!token) {
            this.setState({ loading: false, errors: errors })
            ToastAndroid.show(errors[0], 2000)
            return
        }

        await AsyncStorage.setItem("@token", token)
        this.setState({ loading: false })
        this.props.navigation.replace("Home")
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
                    value={(value) => this.setState({ email: value }) } 
                    type="emailAddress"
                    keyboard="email-address"
                    placeholder="Email"
                ></TGTextInput>
                <TGTextInput 
                    value={(value) => this.setState({ password: value }) }
                    type="password"
                    password
                    placeholder="Password"
                ></TGTextInput>
                {
                    !this.state.loading ?
                        <TGButton onPress={this._login}>Login</TGButton>
                    :
                        <ActivityIndicator color={TGColors.primary} style={styles.loading} size={25} />
                }
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
    },
    loading: {
        marginVertical: 25
    }
})