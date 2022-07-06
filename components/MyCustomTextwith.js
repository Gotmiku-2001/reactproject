import { View, Text } from 'react-native'
import React from 'react'

const Headhoder = ({fname1,lname1,fname2,lname2}) => {
  return (
    <View>
      <Text>Your First Name is {fname1} and Lastname {lname1}</Text>
      <Text>Your First Name is {fname2} and Lastname {lname2}</Text>
    </View>
  )
};

const MyCustomTextwith = () => {
    return (
      <View style={{alignItems:'center',top:50}}>
        <Headhoder fname1='Jedsadagol' lname1='Bincin' fname2='Napajun' lname2='Sangsananan' />
      </View>
    )
  }

export default MyCustomTextwith