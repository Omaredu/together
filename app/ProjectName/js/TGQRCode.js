  
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import QRCode from 'react-native-qrcode-svg'
import { TGColors } from './common'

export default class TGQRCode extends Component {
    render() {
        return (
            <View style={styles.container}>
                <QRCode value={this.props.value || "Empty QR"} size={150} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: TGColors.white,
        elevation: 1.5
    }
})