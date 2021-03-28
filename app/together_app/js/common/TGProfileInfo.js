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
                <TGText style={styles.name} semibold>{this.props.name || "Unnamed"}</TGText>
                <TGText style={styles.field} medium>Gender <TGText style={styles.fieldContent} medium>{this.props.gender || "Not registered yet"}</TGText></TGText>
                <TGText style={styles.field} medium><TGText style={styles.fieldContent} medium>{this.props.age || "Not registered yet"}</TGText> Years Old</TGText>
                <TGStatusLabel status={this.props.status} />
                <TGVerification isVerified={this.props.verified} date={this.props.lastModified} dark />
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
        marginVertical: 10,
        textTransform: 'capitalize'
    },
    field: {
        textAlign: 'center',
        color: TGColors.lightText
    },
    fieldContent: {
        color: TGColors.black,
        textTransform: 'capitalize'
    }
})