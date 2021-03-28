import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import TGColors from './TGColors'
import TGText from './TGText'

export default class TGStatusLabel extends Component {
    _getPhrase(status) {
        let numStatus = TGColors.stringToNumberStatus(status)

        switch (numStatus) {
            case 0:
                return "High Risk"
            case 1:
                return "Be Careful"
            case 2:
                return "Healthy"
            case 3:
                return "With Vaccine"
            default:
                return "Healthy"
        }
    }

    render() {
        return (
            <View style={StyleSheet.create([styles.statusContainer, { backgroundColor: TGColors.getByStatus(this.props.status) }])}>
                <TGText style={{textAlign: 'center', color: TGColors.white, paddingTop: 2}} medium>
                    {this._getPhrase(this.props.status)}
                </TGText>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    statusContainer: {
        justifyContent: 'center', alignItems: 'center',
        width: 130,
        paddingVertical: 5,
        borderRadius: 5,
        marginVertical: 10,
        elevation: .5
    }
})