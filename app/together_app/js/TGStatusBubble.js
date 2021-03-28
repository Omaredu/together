  
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import { TGColors, TGText } from './common'

export default class TGStatusBubble extends Component {
    _getPhrase(status) {
        switch (status) {
            case 0:
                return "High Risk"
            case 1:
                return "Be Careful"
            case 2:
                return "Healthy"
            case 3:
                return "With Vaccine"
            default:
                return "High Risk"
        }
    }

    _getIcon(status) {
        switch (status) {
            case 0:
                return "lock"
            case 1:
                return "error-outline"
            case 2:
                return "lock-open"
            case 3:
                return "shield"
            default:
                return "lock-open"
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bubble}>
                    <MaterialIcons name={this._getIcon(this.props.status)} size={60} color={TGColors.white} />
                </View>
                <TGText style={styles.text} semibold>{this._getPhrase(this.props.status)}</TGText>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bubble: {
        justifyContent: 'center', alignItems: 'center',
        padding: 35,
        borderRadius: 100,
        borderWidth: 7, borderColor: TGColors.transparentWhite
    },
    container: {
        justifyContent: 'center', alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        color: TGColors.white,
        fontSize: 20,
        marginTop: 15,
    }
})