import React, { Component } from 'react'
import { 
    View, 
    SafeAreaView, 
    StyleSheet, 
    Image 
} from 'react-native'

import { TGColors, TGText, TGVerification } from './common'
import TGQRCode from './TGQRCode'
import TGStatusBubble from './TGStatusBubble'

export default class TGHealthPanel extends Component {
    render() {
        return (
            <SafeAreaView style={StyleSheet.create([styles.container, {backgroundColor: TGColors.getByStatus(this.props.status)}])}>
                <Image 
                    resizeMode="contain" 
                    style={styles.icon} 
                    source={require('../assets/png/icon_white.png')} 
                />         
                <View style={styles.infoContainer}>
                    <TGStatusBubble status={this.props.status} />
                    <TGVerification isVerified />
                    <View style={styles.qrContainer}>
                        <TGQRCode />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: TGColors.beCareful,
        justifyContent: 'center', alignItems: 'center',
        paddingVertical: 30,
    },
    icon: {
        height: 35,
        marginVertical: 20
    },
    infoContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginVertical: 20
    },
    qrContainer: {
        marginVertical: 20
    }
})