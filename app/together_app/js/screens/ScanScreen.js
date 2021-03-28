import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Image, View, TouchableNativeFeedbackBase, ToastAndroid } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { BarCodeScanner } from 'expo-barcode-scanner'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { TGColors, TGText, TGProfileImage, TGButton } from '../common'
import TGNavBar from '../TGNavBar'
import TGOverlay from '../TGOverlay'
import TGProfileInfo from '../common/TGProfileInfo'
import api from '../api'

export default class ScanScreen extends Component {
    state = {
        hasCameraPermission: null,
        scanned: true,

        token: null,
        loading: true,

        user: {},
        scannedUser: null
    }

    _signOut = async () => {
        ToastAndroid.show("Invalid session token, please try to log in again.", 2000)
        try {
            await AsyncStorage.removeItem("@token")
        } catch(err) {}
        this.props.navigation.replace("Login")
    }
    
    async componentDidMount() {
        const { status } = await BarCodeScanner.requestPermissionsAsync()
        this.setState({ hasCameraPermission: status === 'granted'})
        
        let token
        
        try {
            token = await AsyncStorage.getItem("@token")
            this.setState({ token })
        }
        catch(err) { 
            await this._signOut()
            return 
        }

        this.setState({ loading: true })
        let user = await api.user.get(token)

        if (!user) {
            await this._signOut()
            return
        }

        this.setState({ user, loading: false, scanned: false })
    }

     handleBarCodeScanned = ({ data }) => {
        this.setState({ scanned: true })
        
        this._getUser(parseInt(data))
    }

    _getUser = async (id) => {
        this.setState({ loading: true })

        let user = await api.user.get(this.state.token, id)

        if (!user) {
            ToastAndroid.show("Invalid together safety code.", 2000)
            this.setState({ loading: false, scanned: false })
            return
        }

        this.setState({ scannedUser: user })

        this.setState({ loading: false })
    }

    _closeOverlay = () => {
        this.setState({ scanned: false, scannedUser: null })
    }

    _launchDoctorScreen = () => {
        this.props.navigation.replace('Doctor', { user: this.state.scannedUser, token: this.state.token })
    }
    
    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <StatusBar 
                    translucent={true} 
                    style="light" 
                />
                <View style={styles.scanView}>
                    <BarCodeScanner 
                        onBarCodeScanned={this.state.scanned && !this.state.loading ? undefined : this.handleBarCodeScanned}
                        style={styles.scanner} 
                    />
                    <View style={styles.content}>
                        <Image style={styles.icon} resizeMode='contain' source={require('../../assets/png/icon_white.png')} />
                        <View style={styles.hintView}>
                            <View style={styles.hint}></View>
                            <View style={styles.actionView}>
                                <TGText medium style={{color: TGColors.white}}>Searching Together Safety Code...</TGText>
                            </View>
                        </View>
                    </View>
                </View>
                { !this.state.loading && this.state.scanned && this.state.scannedUser ?
                        <TGOverlay style={styles.profileOverlay} onClose={this._closeOverlay}>
                            <View style={{marginTop: -35, alignItems: 'center'}}>
                                <TGProfileImage status={this.state.scannedUser.status} url={this.state.scannedUser.avatar} />
                                <TGProfileInfo 
                                    status={this.state.scannedUser.status}
                                    verified={this.state.scannedUser.created_at != this.state.scannedUser.updated_at}
                                    lastModified={this.state.scannedUser.updated_at}
                                    name={this.state.scannedUser.name}
                                    age={this.state.scannedUser.age}
                                    gender={this.state.scannedUser.gender}
                                />
                            </View>
                            {   
                                this.state.user.doctor ?
                                    <TGButton onPress={this._launchDoctorScreen}>Update Profile</TGButton>
                                :
                                    null
                            }
                        </TGOverlay>
                    :
                        null
                }
                <TGNavBar navigation={this.props.navigation} isDoctor={true} option={2} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: TGColors.white
    },
    scanner: {
        flex: 1,
        marginTop: -50
    },
    scanView: {
        flex: 1
    },
    content: {
        position: 'absolute',
        backgroundColor: TGColors.transparentBlack,
        alignItems: 'center',
        width: '100%', height: '100%'
    },
    icon: {
        height: 35,
        marginVertical: 50,
    },
    hintView: {
        flex: .8, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    hint: {
        height: 220, width: 220,
        borderRadius: 10,
        borderWidth: 5, borderColor: TGColors.transparentWhite
    },
    actionView: {
        paddingVertical: 15, paddingHorizontal: 25,
        backgroundColor: TGColors.transparentWhite,
        margin: 20,
        borderRadius: 50
    },
    profileOverlay: {
        justifyContent: 'center', alignItems: 'center'
    }
})