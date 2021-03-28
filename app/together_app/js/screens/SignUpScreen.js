import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, ToastAndroid } from 'react-native'

import { TGColors, TGTextInput, TGButton } from '../common'
import api from '../api'

export default class SignUpScreen extends Component {
    state = {
        email: "",
        password: "",
        confirmPassword: "",
        loading: false,
        errors: []
    }
    
    _signUp = async () => {
        this.setState({ loading: true })
        let { errors } = await api.user.signUp(
            this.state.email,
            this.state.password,
            this.state.confirmPassword
        )

        if (errors[0]) {
            this.setState({ loading: false, errors: errors })
            ToastAndroid.show(errors[0], 2000)
            return
        }

        this.setState({ loading: false })
        ToastAndroid.show("Account created Successfully", 2000)
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
                <TGTextInput 
                    value={(value) => this.setState({ confirmPassword: value }) }
                    type="password"
                    password
                    placeholder="Confirm Password"
                ></TGTextInput>

                {
                    !this.state.loading ?
                        <TGButton onPress={this._signUp}>Sign Up</TGButton>
                    :
                        <ActivityIndicator color={TGColors.primary} style={styles.loading} size={25} />
                }
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
    },
    loading: {
        marginVertical: 25
    }
})