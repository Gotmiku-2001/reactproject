import { Alert, StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const simpleAlertHanler = () =>{
    alert('Hello I am Simple Alert from JavaScript')
}
const twoOptionAlertHanler = () =>{
    Alert.alert(
        //title
        'Hello',
        //body
        'I am Two option alrt from react native',
        [
            {
                text:'Yes',
                onPress:()=> alert('You Press Yes')

            },
            {
                text:'No',
                onPress:()=> alert('You Press No'),
                style:'cancel'
            }
        ],
        //Only the button can be press
        {cancelable: false}
    )

}
const AlertComponent = () => {
    
  return (
    <View style={styles.container}>
     <Button
        title='Simple Alert'
        onPress={simpleAlertHanler}
        />
    <Button
        title='twoOptionAlertHanler'
        onPress={twoOptionAlertHanler}
        />    
    </View>
  )
}

export default AlertComponent

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            //backgroundColor: '#ecf0f1',
        },
    });