import { View, Text,TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {
    const [Password,setPassword]= useState('');
    const [Username,setUsername]=useState('');
   const handleLogin = () => {
    if (!Username || !Password) {
      alert('Please enter both username and password');
      return;
    }
    setUsername('');
    setPassword('');
  };
  return (
    <View style={style.container}>
      <Text style={style.title}>Login</Text>
      <TextInput
      placeholder="Enter Username"
      value={Username}
      onChangeText={setUsername}
      keyboardType='email-address'
      placeholderTextColor="#ed0808ff"
      />

      <TextInput
      placeholder='Enter Password'
      value={Password}
      onChangeText={setPassword}
      secureTextEntry={true}
      placeholderTextColor="#ea0707ff"
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text style={style.btn}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}
const style=StyleSheet.create({
  container: {
    flex: 1,                  // take full height & width
    backgroundColor: "#fff",  // page background
    padding: 40,              // inner spacing
  },
  title:{
    textAlign:'center',
    fontSize:30,
    fontWeight:600

  },
  btn:{
    textAlign:'center',
    justifyContent:'center',
    borderBlockColor:"#efeded9c",
    borderRadius:34,
    backgroundColor:"#c2bdbdff",
    fontSize:23,
    padding:18,
    marginTop:12
  },
  TextInput:{
    backgroundColor:'#786d6dff',
    fontSize:23,
    margin:23,
  }
})

export default LoginForm