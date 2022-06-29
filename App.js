
import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

export default function App() {
  const showData = () => {
    alert("Hello")
   }
  return (
    <View style={styles.container}>
      <Text>Button Example</Text>
      <Button 
      color='purple'
      onPress={showData}
      title='click me'
      />
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