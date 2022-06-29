import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


const TextInputexample = () => {
    return (
    
     <View style ={{padding:10}}>
        
         <View
         style={{
            flex: 1,
            flexDirection :'row',
            justifyContent:'space-between',
            alignItems:'center'
         }}
         
         >
            <TextInput
            placeholder='Course Goal'
            style={{width:'80'}}
            />
            <button title='ADD' />
         </View>
         
         <View>
        
         <View />
        
         </View>
         </View>
        );
    }