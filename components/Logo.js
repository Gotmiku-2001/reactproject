import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import textLogo from '../Textlogo'

const Logo = () => {
  const textLogo = "Thai-Nichi";
  const isTH = false;
  return (
    <View>
      <Text style={styles.textLogo}>TNI</Text>
      <text>{textLogo}</text>
      {/* {
        isTH && <Text>ภาษาไทย</Text>
      } */}
      {/* use if/else or conditional operator */}
      {
        isTH
        ?(<Text>ภาษาไทย</Text>)
        :(<Text>ภาษาอังกฤษ</Text>)
      }
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    textLogo:{
        color:"#00ffff",
        fontSize:48
    }
})