import React, { Component } from 'react'
import {
    SafeAreaView, 
    StyleSheet,
    ActivityIndicator
} from 'react-native'

import { TGColors, TGText } from './common'

export default class TGLoadingPanel extends Component {
    render() {
        return (
            <SafeAreaView style={StyleSheet.create([styles.container, { backgroundColor: this.props.color || TGColors.primary }])}>
                <ActivityIndicator color={TGColors.white} size="large" />
                <TGText medium style={styles.loadingText}>Loading together safety code...</TGText>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: TGColors.primary,
        justifyContent: 'center', alignItems: 'center',
        paddingVertical: 30,
    },
    loadingText: {
        color: TGColors.transparentWhite,
        marginTop: 30
    }
})