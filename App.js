import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation/Navigation'
import { useState } from 'react'
import AuthContextProvider from './store/context/authContext'

export default function App() {
  return (
    <>
    <AuthContextProvider>
      <StatusBar style="auto" />
      <Navigation />
    </AuthContextProvider>
    </>
  );
}
