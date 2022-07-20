import { StyleSheet, Text, View,Button,SafeAreaView } from 'react-native'
import React from 'react'

const Separator = () => (
    <View style={StyleSheet.separator}/>
)

const ButtonExample = () => {
  return (
   <SafeAreaView style={styles.container}>
     <View>
        <Text style={styles.title}>
            The title and onPress handler are required.It is recommended to set
            accessigilityLabel to thelp make your app usable by everyone.
            accessigilityLabel to thelp make your app usable by everyone.
        </Text>
        <Button
            title='Press Me'
            onPress={()=>alert('Simple Button pressed')}
        />       
     </View>
     <Separator/>
     <View>
        <Text style={styles.title}>
            The title and onPress handler are required.It is recommended to set
            accessigilityLabel to thelp make your app usable by everyone.
            accessigilityLabel to thelp make your app usable by everyone.
        </Text>
        <Button
            title='Press Me'
            onPress={()=>alert('Button with adjusted color pressed')}
            color="red"
        />       
     </View>
     <Separator/>
     <View>
        <Text style={styles.title}>
            The title and onPress handler are required.It is recommended to set
        </Text>
        <Button
            title='Press Me'
            disabled//Button not press
        />       
     </View>
     <Separator/>
     <View>
        <Text style={styles.title}>
            The title and onPress handler are required.It is recommended to set
            accessigilityLabel to thelp make your app usable by everyone.
        </Text>
        <View style={styles.fixToText}>
            <Button 
            title='Left Button '
            onPress={()=>alert('Left Button pressed')}
            />     
         
        <Button 
            title='Right Button '
            onPress={()=>alert('Right Button pressed')}
        /> 
        </View>       
     </View>
   </SafeAreaView>
  )
}

export default ButtonExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,},
        title: {
            textAlign: 'center',
            marginVertical: 8,},
        fixToText: {
            flexDirection: 'row',
            justifyContent: 'space-between',},
        separator: {
            marginVertical: 8,
            borderBottomColor: '#737373',
            borderBottomWidth: StyleSheet.hairlineWidth,},
    });