
import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';

export default function App() {
  const navigation = useNavigation();
  return (
    <>
    <StatusBar
    barStyle = "dark-content"
    hidden = {false}
    backgroundColor = "#FFF"
    translucent = {false}
    networkActivityIndicatorVisible = {true}
    />
    <Header title="Clínica Estilo De Vida !"/>
    <View style={styles.container}>
      <Image source={require('./Assets/consulta.png')} />
      <Text style={styles.title}>Seja Bem-Vindo !</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Form')}>
        <Text style={styles.buttonText}>Consultar</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.rodape}>
      <Text style={styles.rodapeText}>
        Ricardo-San
      </Text>
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'orange'
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: "black",
    padding: 10,
  },
  buttonText:{
    fontSize: 15,
    color: 'orange',
  },
  rodape:{
    backgroundColor: 'white',
  },
  rodapeText:{
    fontSize: 30,
    alignSelf: 'center',
    color: 'orange',
  },
});
