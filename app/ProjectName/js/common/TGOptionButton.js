import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import TGColors from './TGColors'
import TGText from './TGText'

export default class TGOptionButton extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={this.props.onPress}>
                <View style={StyleSheet.create([
                    styles.option,
                    { borderColor: this.props.color },
                    this.props.checked ? { backgroundColor: this.props.color, elevation: .5 } : null
                ])}>
                    <TGText medium style={this.props.checked ? styles.checkedLabel : styles.label}>{ this.props.label || "Option" }</TGText>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    option: {
        borderWidth: 2,
        borderRadius: 5,
        paddingVertical: 5, paddingHorizontal: 20,
        margin: 5,
        justifyContent: 'center', alignItems: 'center'
    },
    label: {
        marginTop: 2,
        textAlign: 'center',
        color: TGColors.black
    },
    checkedLabel: {
        marginTop: 2,
        textAlign: 'center',
        color: TGColors.white
    }
})