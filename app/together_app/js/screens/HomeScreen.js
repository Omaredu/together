import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, ActivityIndicator, StyleSheet, ToastAndroid } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { TGColors } from '../common'
import api from '../api'
import TGHealthPanel from '../TGHealthPanel'
import TGLoadingPanel from '../TGLoadingPanel'
import TGNavBar from '../TGNavBar'

export default class HomeScreen extends Component {
    state={
        user: {},
        loading: true
    }

    _signOut = async () => {
        ToastAndroid.show("Invalid session token, please try to log in again.", 2000)
        try {
            await AsyncStorage.removeItem("@token")
        } catch(err) {}
        this.props.navigation.replace("Login")
    }

    async componentDidMount() {
        let token = ""

        try {
            token = await AsyncStorage.getItem("@token")
        }
        catch(err) { 
            await this._signOut()
            return 
        }

        let user = await api.user.get(token)

        if (!user) {
            await this._signOut()
            return
        }

        this.setState({ user, loading: false })
    }

    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <StatusBar 
                    translucent={true} 
                    style="light"
                />
                {
                    !this.state.loading ?
                        <TGHealthPanel 
                            status={TGColors.stringToNumberStatus(this.state.user.status)} 
                            userId={this.state.user.id.toString()}
                            verified={this.state.user.created_at != this.state.user.updated_at}
                            lastModified={this.state.user.updated_at}
                        />
                    :
                        <TGLoadingPanel />
                }
                <TGNavBar navigation={this.props.navigation} isDoctor={true} option={1} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    screen: { 
        flex: 1,
        backgroundColor: TGColors.white
    }
})