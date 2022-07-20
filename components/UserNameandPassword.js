import { StyleSheet, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import { Button } from 'react-native-web';

const UsernamePassword = () => {
  const [Email,setEmail]=useState('');
  const [Name,setName]=useState('');
  /* const showData = () => {
    alert('Email: '+Email+"\n"+'Password: '+Password)
   }; */
   const checkTexInput = () => {
    //Check for the Name TextInput
    if (!Name.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!Email.trim()) {
      alert('Please Enter Email');
      return;
    }
    alert('Success')
    //Check for the Email TextInput
    //Checked Successfully
    //Do whatever you want
    
  }
  return (
    <View style={{flex:1,marginTop:20,alignItems:'center'}}>
      <TextInput
      value={Name}
      onChangeText = {(Name)=>{setName(Name)}}
      style={styles.TextInputStyle}
      placeholder='Name'
      />
      <TextInput
      value={Email}
      onChangeText = {(Email)=>{setEmail(Email)}}
      style={styles.TextInputStyle}
      placeholder='Email'
      />
    <View style={{marginTop: 15}}>
       <Button onPress={checkTexInput} title = 'Submit' />
    </View>
    </View>
  )
}

export default UsernamePassword

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding:35,
  },
  
  TextInputStyle :{
      width:'100%',
      height:40,
      paddingHorizontal:5,
      borderWidth: 0.5,
      marginTop:15,
  }
})

