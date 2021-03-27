import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import TGText from './TGText'
import TGColors from './TGColors'

export default class TGButton extends Component {
    render() {
        return (
            <TouchableOpacity 
                activeOpacity={0.7}
                onPress={this.props.onPress}
                style={StyleSheet.create([
                    styles.buttonContainer,
                    this.props.textOnly ? styles.textOnlyContainer : null
                ])}
            >
                <TGText 
                    style={this.props.textOnly ? styles.textOnlyText : styles.buttonText} 
                    semibold
                >
                    {this.props.children}
                </TGText>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonText: { 
        color: TGColors.white,
        textAlign: 'center'
    },
    buttonContainer: {
        backgroundColor: TGColors.primary,
        borderRadius: 5,
        width: '85%', maxWidth: 400,
        justifyContent: 'center', alignItems: 'center',
        paddingVertical: 18, paddingHorizontal: 23,
        marginHorizontal: 20, marginVertical: 10,
        elevation: .5
    },
    textOnlyContainer: {
        backgroundColor: TGColors.transparent,
        marginVertical: 5,
        elevation: 0
    },
    textOnlyText: {
        color: TGColors.primary
    }
})