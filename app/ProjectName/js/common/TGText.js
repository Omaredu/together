import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

export default class TGText extends Component {
    render() {
        return (
            <Text
                style={StyleSheet.create([
                    styles.text,
                    this.props.style || null,
                    this.props.bold ? { fontFamily: 'poppins-bold' } : null,
                    this.props.semibold ? { fontFamily: 'poppins-semibold' } : null,
                    this.props.medium ? { fontFamily: 'poppins-medium' } : null,
                ])}
            >
                {this.props.children}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'poppins',
        fontSize: 12.5
    }
})