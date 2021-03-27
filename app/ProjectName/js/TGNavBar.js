  
import React, { Component } from 'react'
import { SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import { TGColors } from './common'

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

/**
 * 1 = home
 * 2 = scanner
 * 3 = doctor
 * 4 = settings
 */

export default class TGNavBar extends Component {
    _getCurrenColor(option) {
        if (this.props.option === option) {
            return TGColors.primary
        } else {
            return TGColors.lightText
        }
    }

    _navigateTo = (route) => {
        this.props.navigation.replace(route)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => this._navigateTo("Home")} activeOpacity={0.6}>
                    <MaterialIcons name="face" color={this._getCurrenColor(1)} size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this._navigateTo("Scan")} activeOpacity={0.6}>
                    <MaterialIcons name="qr-code-scanner" color={this._getCurrenColor(2)} size={30} />
                </TouchableOpacity>
                {
                    this.props.isDoctor ?
                        <TouchableOpacity style={styles.button} onPress={() => this._navigateTo("DoctorEmpty")} activeOpacity={0.6}>
                            <MaterialCommunityIcons name="shield-check" color={this._getCurrenColor(3)} size={30} />
                        </TouchableOpacity>
                    :
                        null
                }
                <TouchableOpacity style={styles.button} onPress={() => this._navigateTo("Config")} activeOpacity={0.6}>
                    <MaterialIcons name="settings" color={this._getCurrenColor(4)} size={30} />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: TGColors.white,
        width: '100%',
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-evenly', alignItems: 'center',
        borderTopLeftRadius: 20, borderTopRightRadius: 20,
        elevation: 4
    },
    button: {
        padding: 10,
    }
})