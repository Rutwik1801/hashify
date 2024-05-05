import React, { useContext, useState } from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { AuthContext } from '../store/context/authContext'
import { View, Text } from 'react-native';

const Login = ({ navigation }) => {
  const authContext = useContext(AuthContext)
  return (
    <View >
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Login" onPress={() => {authContext.onLogin()}} />
    </View>
  );
};


const SignUp = () => {
  const authContext = useContext(AuthContext)
  return (
    <View >
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Sign Up" onPress={() => {authContext.onLogin()}} />
    </View>
  );
};

const SignIn = () => {

  const authContext = useContext(AuthContext)
  const [isSignUp, setIsSignUp] = useState(true)

  return (
    <View style={styles.container}>
      {
        isSignUp ? <SignUp /> : <Login />
      }
      <Button onPress={() => {setIsSignUp(!isSignUp)}} title={isSignUp ? " Login" : "Sign up"} />
      <Button title='Sign In With Google' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  }
});

export default SignIn;