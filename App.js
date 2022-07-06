
import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
// import LotsOfGreetings from './components/LotsOfGreetings'
import MyCustomTextwith from './components/MyCustomTextwith'


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
      <MyCustomTextwith/>
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