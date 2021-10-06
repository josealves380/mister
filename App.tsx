import React from "react";
import { useFonts } from 'expo-font';
import { Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { Login } from './src/screens/Login';

export default function App(){
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return(
    <Login />
  );
}
