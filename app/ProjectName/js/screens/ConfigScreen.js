import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, View, StyleSheet, Image } from 'react-native'

import { TGButton, TGColors, TGProfileImage, TGProfileInfo, TGText } from '../common'
import TGNavBar from '../TGNavBar'

export default class ConfigScreen extends Component {
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

                <View style={styles.screenContent}>
                    <TGProfileImage />
                    <TGProfileInfo />
                </View>
                <TGButton>Log Out</TGButton>
                <TGText style={styles.advice} medium>
                    Only an authorized doctor can edit your profile information and health status.
                </TGText>
                <TGNavBar navigation={this.props.navigation} isDoctor={false} option={4} />
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
    }
})