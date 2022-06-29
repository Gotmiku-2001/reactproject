import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Logo from './components/Logo';
import styles from './components/style';
import stySheet from './components/stySheet';
import Textinputexample from './components/Textinputexample';
import Cat from './Cat';
import Cafe from './components/Cafe';

const App = () => {

  const showData = () => {
    alert("Hello butt")
   }

  return (
    <View >
      {/* <Text style={stySheet.title}>React Native</Text>*/}
      <Logo />
      <Button 
      onPress={showData}
      title='click me'
      />
      {/* <Textinputexample/> */}
      {/* <Cat/> */}
      {/* <Cafe/>
      <Cafe/>
      <Cafe/> */}
    </View>
  );
};

export default App;