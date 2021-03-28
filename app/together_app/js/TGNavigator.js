import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { 
    LoginScreen, 
    SignUpScreen, 
    HomeScreen, 
    ScanScreen, 
    ConfigScreen,
    DoctorEmptyScreen,
    DoctorScreen 
} from './screens'

const Stack = createStackNavigator()

export default class FVNavigator extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen} 
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="SignUp" 
                    component={SignUpScreen} 
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        headerShown: false,
                        animationEnabled: false
                    }}
                />
                <Stack.Screen 
                    name="Scan" 
                    component={ScanScreen} 
                    options={{
                        headerShown: false,
                        animationEnabled: false
                    }}
                />
                <Stack.Screen 
                    name="Config" 
                    component={ConfigScreen} 
                    options={{
                        headerShown: false,
                        animationEnabled: false
                    }}
                />
                <Stack.Screen 
                    name="DoctorEmpty" 
                    component={DoctorEmptyScreen} 
                    options={{
                        headerShown: false,
                        animationEnabled: false
                    }}
                />
                <Stack.Screen 
                    name="Doctor" 
                    component={DoctorScreen} 
                    options={{
                        headerShown: false,
                        animationEnabled: false
                    }}
                />
            </Stack.Navigator>
        )
    }
}