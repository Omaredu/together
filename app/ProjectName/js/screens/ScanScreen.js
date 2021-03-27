import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Image, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { BarCodeScanner } from 'expo-barcode-scanner'

import { TGColors, TGText, TGProfileImage } from '../common'
import TGNavBar from '../TGNavBar'
import TGOverlay from '../TGOverlay'
import TGProfileInfo from '../common/TGProfileInfo'

export default class ScanScreen extends Component {
    state = {
        hasCameraPermission: null,
        scanned: false,
        profileStatus: 3
    }
    
    async componentDidMount() {
        const { status } = await BarCodeScanner.requestPermissionsAsync()
        this.setState({ hasCameraPermission: status === 'granted'})   
    }

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true })
        console.log(data, type)
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
                        onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
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
                {/* <TGOverlay style={styles.profileOverlay}>
                    <View style={{marginTop: -35, alignItems: 'center'}}>
                        <TGProfileImage status={this.state.profileStatus} />
                        <TGProfileInfo status={this.state.profileStatus} />
                    </View>
                </TGOverlay> */}
                <TGNavBar navigation={this.props.navigation} isDoctor={false} option={2} />
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