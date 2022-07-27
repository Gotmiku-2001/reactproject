import { StyleSheet, Text, View,TouchableHighlight,TouchableNativeFeedback,TouchableOpacity,TouchableWithoutFeedback,SafeAreaView } from 'react-native'
import React from 'react'

const Touchable_Example = () => {
    const onPress = (msg) => {
        alert('Alert for: '+msg);
    };
  return (
  <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <TouchableNativeFeedback
                onPress={()=>onPress('TouchableNativeFreedback Pressed') }
            >
                <View style={styles.button1}>
                    <Text>TouchableNativeFeedback(Only Android)</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableHighlight
             onPress={()=>onPress('TouchableHighlight Pressed')}>
                <View style={styles.button}>
                    <Text>TouchableHighlight</Text>
                </View>
            </TouchableHighlight>
            <TouchableOpacity onPress={()=>onPress('TouchableOpacity Pressed')}>
                <View style={styles.button}>
                    <Text>TouchableOpacity</Text>
                </View>
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={()=>onPress('TouchableWithoutFeedback Pressed')}>
            <View style={styles.button}>
                    <Text>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    </SafeAreaView>
  )
}

export default Touchable_Example

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,},
        button: {alignItems: 'center',
        backgroundColor: '#DDDDDD', //color of button 
        padding: 10,
        width: 300,
        marginTop: 16,},
        button1: {alignItems: 'center',
        backgroundColor: '#DDDDDD', //color of button 
        padding: 10,
        width: 300,},
    });