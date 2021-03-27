import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const UserInput = (props) => {
  return (
    <View>
      <TextInput
        style={{
          flexDirection:"row",
          alignItems:"center",
          marginHorizontal:55,
          backgroundColor: '#FFFFFF',
          height: 50,
          borderColor: '#e0e0e0',
          color: '#adacac',
          borderWidth: 1,
          width: 270,
          paddingLeft: 10,
          marginTop:  30,
          borderRadius: 5
        }}
        defaultValue={props.input}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Image
          source={require('./static/icon.png')}
        />
        <Text style={styles.pieces} 
          style={{
            fontSize: 30, 
            fontWeight: 'bold',
            marginTop: 50}}>
          Login
        </Text>
        <UserInput input="Email"/>
        <UserInput input="Password"/>
        <TouchableOpacity
          style={styles.button}
          >
          <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Log In</Text>
        </TouchableOpacity>
          <Text style={styles.pieces}
          style={{
            textDecorationLine: 'underline',
            marginTop: 20
          }}>
            Already Have an Account?
          </Text>
          <Text style={styles.pieces}
          style={{
            color: '#adacac',
            marginTop: 60,
            textAlign: 'center'
          }}>
            (This prototype was made only for demonstration purposes)
            Hack Made For HackOr
          </Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#28DF97',
    padding: 10,
    marginBottom: 10,
    marginTop: 40,
    paddingRight: 112,
    paddingLeft: 112,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    cursor: 'pointer'
  },
  pieces: {
    marginTop: 40,
  }
});
