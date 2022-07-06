import { StyleSheet, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import { Button } from 'react-native-web';

const UsernamePassword = () => {
  const [Email,setEmail]=useState('');
  const [Password,setPassword]=useState('');
  const showData = () => {
    alert('Email: '+Email+"\n"+'Password: '+Password)
   };
  return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <TextInput
      value={Email}
      onChangeText = {(Email)=>{setEmail(Email)}}
      style={styles.TextInput}
      placeholder='Email'
      />
      <TextInput
      value={Password}
      onChangeText = {(Password)=>{setPassword(Password)}}
      style={styles.TextInput}
      placeholder='Password'
      />
      <Button onPress={showData} title = 'Submit' />
    </View>
  )
}

export default UsernamePassword

const styles = StyleSheet.create({
  TextInput :{
      width:250,
      height:45,
      padding:10,
      marginTop:20,
      marginBottom:10,
      backgroundColor:'#bcc9e1'


  }
})
