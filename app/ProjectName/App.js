
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';

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
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn}/>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
        <Stack.Screen name="VerifiedScreen" component={VerifiedScreen} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  };

  const LogIn = ({ navigation }) => {
    return (
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
          onPress={() =>
              navigation.navigate('Register')
            }
          >
          <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Log In</Text>
        </TouchableOpacity>
          <Text 
          style={styles.pieces}
          style={{
            textDecorationLine: 'underline',
            marginTop: 20
          }}
          onPress={() =>
            navigation.navigate('Register')
          }>
            Don't Have an Account?
          </Text>
          <Text style={styles.pieces}
          style={{
            color: '#adacac',
            marginTop: 60,
            textAlign: 'center'
          }}>
            (This prototype was made only for demonstration purposes)
            Hack Made For HackOr by Squad Sierra
          </Text>
        <StatusBar style="auto" />
      </View>
    );
  };

  const Register = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Image
          source={require('./static/icon.png')}
        />
        <Text style={styles.pieces} 
          style={{
            fontSize: 30, 
            fontWeight: 'bold',
            marginTop: 50}}>
          Register
        </Text>
        <UserInput input="Email"/>
        <UserInput input="Password"/>
        <UserInput input="Confirm Password"/>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('HomeScreen')
          }>
          <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Register</Text>
        </TouchableOpacity>
          <Text 
          style={styles.pieces}
          style={{
            textDecorationLine: 'underline',
            marginTop: 20
          }}
          onPress={() =>
            navigation.navigate('LogIn')
          }>
            Already Have an Account?
          </Text>
          <Text style={styles.pieces}
          style={{
            color: '#adacac',
            marginTop: 60,
            textAlign: 'center'
          }}>
            (This prototype was made only for demonstration purposes)
            Hack Made For HackOr by Squad Sierra
          </Text>
        <StatusBar style="auto" />
      </View>
    );
  };

  
  const HomeScreen = ({ navigation }) => {
    return (
      <View 
        style={styles.container}
        style={{backgroundColor: '#28DF99'}}
        name= "BC"
      >
        <View>
        <Image
          source={require('./static/iconWhite.png')}
        />
        <MaterialIcons name="lock" size={50} color="white" />
        <Text>Doctor Verified 2 Days Ago</Text>
        <QRCode
          value="Just some string value"
          logoSize={30}
        />
        </View>
        <View style={styles.lowNavBar}>
          <MaterialIcons name="face" size={40} color="black" />
          <MaterialIcons name="qr-code-scanner" size={40} color="black"
            onPress={() =>
              navigation.navigate('ScanScreen')
            }
          />
          <MaterialIcons name="verified-user" size={40} color="black" 
            onPress={() =>
              navigation.navigate('VerifiedScreen')
            }
          />
          <MaterialIcons name="settings" size={40} color="black" 
            onPress={() =>
              navigation.navigate('Settings')
            }
          />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  };

  let randomNumber = () => {
    let number = 0
  }
  const changeBackground = (number)=>{
    if(number == 0){
      this.state({backgroundColor: '#FF3100'})
    }
    else if(number == 1){
      this.state({backgroundColor: '#FF3100'})
    }
    else if(number == 2){
      this.state({backgroundColor: '#FFB100'})
    }
    else if(number == 3){
      this.state({backgroundColor: '#FF3100'})
    }
  }


  const ScanScreen = ({ navigation }) => {
    return (
      <View 
        style={styles.container}
        style={{backgroundColor: '#C2C2C2'}}
      > 
        <View>
        <Image
          source={require('./static/iconWhite.png')}
        />
        <QRCode
          value="Just some string value"
          logoSize={30}
        />
        <TouchableOpacity
          style={styles.button}
          style={{backgroundColor: '#FFFFFF'}}
          onPress={() =>
            navigation.navigate('ScanScreen')
          }>
          <Text style={{color: '#000000', fontWeight: 'bold'}}>Searching Together Safety Code...</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.lowNavBar}>
          <MaterialIcons name="face" size={40} color="black" />
          <MaterialIcons name="qr-code-scanner" size={40} color="black"
            onPress={() =>
              navigation.navigate('ScanScreen')
            }
          />
          <MaterialIcons name="verified-user" size={40} color="black" />
          <MaterialIcons name="settings" size={40} color="black" />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  };

  const VerifiedScreen = ({ navigation }) => {
    return (
      <View 
        style={styles.container}
        style={{backgroundColor: '#28DF99'}}
      >
        <View>
        <Image
          source={require('./static/icon.png')}
        />
        <Text>Doctor Verified 2 Days Ago</Text>
        <QRCode
          value="Just some string value"
          logoSize={30}
        />
        </View>
        <View style={styles.lowNavBar}>
          <MaterialIcons name="face" size={40} color="black" />
          <MaterialIcons name="qr-code-scanner" size={40} color="black"
            onPress={() =>
              navigation.navigate('ScanScreen')
            }
          />
          <MaterialIcons name="verified-user" size={40} color="black" />
          <MaterialIcons name="settings" size={40} color="black" />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  };

  const Settings = ({ navigation }) => {
    return (
      <View 
        style={styles.container}
        style={{backgroundColor: '#28DF99'}}
      >
        <View>
        <Image
          source={require('./static/icon.png')}
        />
        <Text>Doctor Verified 2 Days Ago</Text>
        <QRCode
          value="Just some string value"
          logoSize={30}
        />
        </View>
        <View style={styles.lowNavBar}>
          <MaterialIcons name="face" size={40} color="black" />
          <MaterialIcons name="qr-code-scanner" size={40} color="black"
            onPress={() =>
              navigation.navigate('ScanScreen')
            }
          />
          <MaterialIcons name="verified-user" size={40} color="black" />
          <MaterialIcons name="settings" size={40} color="black" />
        </View>
        <StatusBar style="auto" />
      </View>
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
    },
    pieces: {
      marginTop: 40,
    },

    lowNavBar: {
      justifyContent: 'center',
      alignItems: 'stretch'
    },
  });
  


