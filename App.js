
import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
// import LotsOfGreetings from './components/LotsOfGreetings'
//  import MyCustomTextwith from './components/MyCustomTextwith'
import Count from './components/Count'
/* import InputText from './components/InputText'
import UsernamePassword from './components/UserNameandPassword'
import AlertComponent from './components/AlertComponent'
import ImageWithTextInput from './components/ImageWithTextInput'
import Touchable_Example from './components/Touchable_Example'
import TouchablePractice from './components/TouchablePractice'
import DynamicStyle from './components/DynamicStyle' 
import ModelExample from './components/ModelExample' */


export default function App() {
  const showData = () => {
    alert("Hello")
   }
  return (
    <View style={styles.container}>
      {/* <Text>Button Example</Text>

<Button 
      color='purple'
      onPress={showData}
      title='click me'
      /> */}
      {/* <LotsOfGreetings/> */}
      {/* <MyCustomTextwith/> */}
       <Count/>
      {/* <InputText/> */}
     {/*  <UsernamePassword/> */}
    {/* <AlertComponent/> */}
     {/* <ImageWithTextInput/> */}
    {/*  <ButtonExample/> */}
    {/* <Touchable_Example/> */}
    {/* <TouchablePractice/> */}
    {/* <DynamicStyle/> */}
   {/*  <ModelExample/> */}
    </View> 

  )
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})