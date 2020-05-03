import React from 'react';
import {View, Text, StyleSheet} from 'react-native'; 


const RegisterScreen = () => {
  return (
    <View style = {styles.container}>
      <Text>Hello from Register.js</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1, 
    alignItems : 'center',
    justifyContent: 'center'
  }
})

export default RegisterScreen;