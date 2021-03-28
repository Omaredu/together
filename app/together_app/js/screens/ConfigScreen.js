import React, { Component, Fragment } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, View, StyleSheet, Image, ToastAndroid, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { TGButton, TGColors, TGProfileImage, TGProfileInfo, TGText } from '../common'
import TGNavBar from '../TGNavBar'
import api from '../api'

export default class ConfigScreen extends Component {
    state={
        user: {},
        loading: true
    }

    async componentDidMount() {
        const token = await AsyncStorage.getItem("@token")
        let user = await api.user.get(token, null)

        if (!user) {
            ToastAndroid.show("Invalid session token, please try to log in again.")
            await AsyncStorage.removeItem("@token")
            this.props.navigation.replace("Login")
            return
        }

        this.setState({ user, loading: false })
    }

    _logout = async () => {
        await AsyncStorage.removeItem("@token")
        this.props.navigation.replace("Login")
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
                    style={styles.icon}
                    resizeMode="contain" 
                    source={require('../../assets/png/icon.png')} 
                />

                {
                    !this.state.loading ?
                        <View style={styles.screenContent}>
                            <TGProfileImage status={this.state.user.status} url={this.state.user.avatar} />
                            <TGProfileInfo 
                                status={this.state.user.status} 
                                name={this.state.user.name}
                                gender={this.state.user.gender}
                                age={this.state.user.age}

                                lastModified={this.state.user.updated_at}
                                verified={this.state.user.created_at != this.state.user.updated_at}
                            />
                        </View>
                    :
                        <View style={styles.loadingPanel}>
                            <ActivityIndicator color={TGColors.primary} size={40} />
                        </View>
                }
                <TGButton onPress={this._logout}>Log Out</TGButton>
                <TGText style={styles.advice} medium>
                    Only an authorized doctor can edit your profile information and health status.
                </TGText>
                <TGNavBar navigation={this.props.navigation} isDoctor={true} option={4} />
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
    icon: {
        height: 35,
        marginVertical: 40
    },
    screenContent: {
        height: '45%',
        width: '100%',
        justifyContent: 'center', alignItems: 'center',
        marginBottom: 25, marginTop: 15
    },
    advice: {
        width: 300,
        textAlign: 'center',
        color: TGColors.lightText
    },
    loadingPanel: {
        flex: .784,
        justifyContent: 'center'
    }
})