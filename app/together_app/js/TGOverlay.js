import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'
import { TGColors } from './common'

export default class TGOverlay extends Component {
    render() {
        return (
            <View style={styles.overlayContainer}>
                <View style={StyleSheet.create([styles.overlay, this.props.style || null])}>
                    <TouchableOpacity style={styles.closeButton} onPress={this.props.onClose}>
                        <MaterialIcons name="close" size={25} />
                    </TouchableOpacity>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    overlayContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        justifyContent: 'center', alignItems: 'center'
    },
    overlay: {
        width: '85%', maxWidth: 400,
        padding: 20,
        elevation: 1.5,
        borderRadius: 10,
        backgroundColor: TGColors.white
    },
    closeButton: {
        padding: 10,
        alignSelf: 'flex-end'
    }
})