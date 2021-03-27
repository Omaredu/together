import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, View, Image } from 'react-native'

import { TGColors, TGText } from '../common'
import TGNavBar from '../TGNavBar'

import { MaterialCommunityIcons } from '@expo/vector-icons'

export default class DoctorEmpryScreen extends Component {
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
                </View>

                <TGNavBar navigation={this.props.navigation} option={3} />
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