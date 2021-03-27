import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, View, StyleSheet } from 'react-native'

import { TGColors } from '../common'
import TGHealthPanel from '../TGHealthPanel'
import TGNavBar from '../TGNavBar'

export default class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <StatusBar 
                    translucent={true} 
                    style="light" 
                />
                <TGHealthPanel status={0} />
                <TGNavBar navigation={this.props.navigation} isDoctor={false} option={1} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    screen: { 
        flex: 1,
        backgroundColor: TGColors.white
    }
})