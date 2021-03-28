import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import 'javascript-time-ago/load-all-locales'
import TimeAgo from 'javascript-time-ago'

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import TGColors from './TGColors'
import TGText from './TGText'

export default class TGVerification extends Component {
    constructor() {
        super()
        this.timeAgo = new TimeAgo('en-US')
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.isVerified
                    ? <MaterialCommunityIcons name="shield-check" style={styles.medal} color={this.props.dark ? TGColors.primary : TGColors.white} />
                    : <MaterialIcons name="warning" style={styles.medal} size={15} color={this.props.dark ? TGColors.redOrange : TGColors.white} />
                }
                <View>
                    <TGText style={this.props.dark ? styles.darkText : styles.text} semibold>{this.props.isVerified ? "Doctor Verified" : "No Doctor Verification"}</TGText>
                    {
                        this.props.isVerified ?
                            <TGText style={this.props.dark ? styles.darkText : styles.text} medium>
                                {this.timeAgo.format(new Date(this.props.date || 0))}
                            </TGText>
                        :
                            null    
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        flexDirection: 'row',
        opacity: .7
    },
    text: {
        textAlign: 'right',
        color: TGColors.white
    },
    darkText: {
        textAlign: 'right',
        color: TGColors.black
    },
    medal: {
        marginHorizontal: 5, marginVertical: 2
    }
})