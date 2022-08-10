import { View, Text,Button } from 'react-native'
import React ,{useEffect, useState} from 'react'

const Count = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
      console.log('use effectf 1');
    })

    useEffect(()=>{
      console.log('use effectf 2');
    },[count])

    useEffect(()=>{
      console.log('use effectf 3');
    },[])

  return (
    <View>
      <Text>{count}</Text>
      <Button
      title='Click Me'
      onPress={()=>setCount(count+1)}
      />
    </View>
  )
}

export default Count