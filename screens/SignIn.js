import React, { useContext } from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { AuthContext } from '../store/context/authContext'

const SignIn = () => {

  const authContext = useContext(AuthContext)

  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Button onPress={() => {authContext.onLogin()}} title='Sign In' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SignIn;