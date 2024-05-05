import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/context/authContext'

export default function Profile() {
  const authContext = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <StatusBar style="auto" />
      <Button title='Logout' onPress={()=> {authContext.onLogout()}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
