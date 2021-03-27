import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import TGColors from './TGColors'
import TGText from './TGText'
import TGStatusLabel from './TGStatusLabel'
import TGVerification from './TGVerification'

export default class TGProfileInfo extends Component {
    render() {
        return (
            <View style={StyleSheet.create([styles.mainView, this.props.style || null])}>
                <TGText style={styles.name} semibold>Omar Sánchez</TGText>
                <TGText style={styles.field} medium>Gender <TGText style={styles.fieldContent} medium>Male</TGText></TGText>
                <TGText style={styles.field} medium><TGText style={styles.fieldContent} medium>18</TGText> Years Old</TGText>
                <TGStatusLabel status={this.props.status} />
                <TGVerification isVerified dark />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 18,
        marginVertical: 10
    },
    field: {
        textAlign: 'center',
        color: TGColors.lightText
    },
    fieldContent: {
        color: TGColors.black
    }
})