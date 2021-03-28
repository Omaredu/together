import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import TGColors from './TGColors'

export default class TGTextInput extends Component {
    render() {
        return (
            <TextInput 
                defaultValue={this.props.defaultValue}
                onChangeText={(value) => this.props.value(value)}
                textContentType={this.props.type} 
                style={StyleSheet.create([styles.textInput, this.props.style])}
                keyboardType={this.props.keyboard}
                placeholder={this.props.placeholder} 
                secureTextEntry={this.props.password}
            /> 
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        marginHorizontal: 20, marginVertical: 10,
        borderRadius: 5,
        fontSize: 12.5,
        fontFamily: 'poppins-medium',
        paddingVertical: 15, paddingHorizontal: 20,
        backgroundColor: TGColors.white,
        borderWidth: 2, borderColor: TGColors.lightText,
        width: '85%', maxWidth: 400
    }
})