import { View, TextInput } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web';

const Textinputexample = () => {
    return (
        <View style={{ padding: 50 }}>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>

                <TextInput
                    placeholder='course goal'
                    style={{ 
                        width: '80%', 
                        borderColor: 'black', 
                        borderWidth: 1, 
                        padding: 10 
                    }}/>
                <Button title='ADD'/>
            </View>

        </View>
    )
}

export default Textinputexample;