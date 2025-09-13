import { View,Button, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react';
const UseEffect = () => {
  const [count ,setcount]= useState(5)
  
  const [score ,setScore]= useState(5)
  useEffect(()=>{
     console.log('useeffect')
  }),[count];
  return (
    <View style={{flex:1,justifyContent:'center',}}>
      <Text style={{textAlign:'center',fontWeight:600,fontSize:80}}>UseEffect</Text>
       <Text style={{textAlign:'center',fontWeight:600,fontSize:30}}>count: {count}</Text>
       <Text style={{textAlign:'center',fontWeight:600,fontSize:30}}>score: {score}</Text>
       <Button title='press' onPress={()=> setcount(count+1)}/>
         <Button title='press' onPress={()=> setScore(score+10)}/>
    </View>
  )
}

export default UseEffect