
const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pieces} 
        style={{
          fontSize: 30, 
          fontWeight: 'bold',
          marginTop: 50}}>
        Register
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
          Hack Made For HackOr by Squad Sierra
        </Text>
      <StatusBar style="auto" />
    </View>
  );
};


