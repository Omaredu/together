import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import TGColors from './TGColors'

export default class TGAgeInput extends Component {
    render() {
        return (
            <TextInput 
                placeholder={this.props.placeholder} 
                style={styles.input} 
                keyboardType="number-pad" 
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        fontFamily: 'poppins-medium',
        width: 80,
        height: 50,
        textAlign: 'center',
        paddingVertical: 10, paddingHorizontal: 20,
        borderWidth: 2, borderColor: TGColors.lightText,
        borderRadius: 5
    }
})