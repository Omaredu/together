import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import TGColors from './TGColors'

export default class TGProfileImage extends Component {
    render() {
        return (
            <View style={StyleSheet.create([
                styles.imageContainer,
                { backgroundColor: TGColors.getTransparentByStatus(this.props.status) }
            ])}>
                <Image 
                    resizeMode="cover" 
                    source={{ uri: this.props.url ||"https://i.stack.imgur.com/l60Hf.png" }} 
                    style={styles.image}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: 120, width: 120,
        borderRadius: 100,
    },
    imageContainer: {
        padding: 10,
        borderRadius: 100,
        justifyContent: 'center', alignItems: 'center'
    }
})