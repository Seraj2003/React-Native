import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react'
 const data=[{id:1,title:'Home'},
    {id:2,title:'Home'},
    {id:3,title:'Home'},
    {id:4,title:'Home'},
    {id:5,title:'Home'},
    {id:6,title:'Home'},
    {id:7,title:'Home'},
    {id:8,title:'Home'},
    {id:9,title:'Home'}
 ];
const Grid = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Grid</Text>
      <ScrollView contentContainerStyle={styles.itemContainer}>
        {
            data.map((item)=>(
                <View key={item.id} style={styles.gridItem}>
                    <Text style={styles.gridTitle}>{item.title}</Text>
                </View>
            ))
        }
      </ScrollView>
    </View>
  )
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffffff'
    },
    header:{
        textAlign:'center',
        fontSize:23,
        fontWeight:600,
        padding:20,
        marginVertical:60,
        color:'#4000e2ff'
    },
    itemContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        padding:17

    },
    gridTitle:{
        fontSize:30,
        color:'black',
        fontWeight:500
    },
    gridItem:{
        backgroundColor:'#3de10bff',
        height:90,
        width:'50%',
        borderRadius:23,
        alignItems:'center',
        justifyContent:'center'

        
    }
})

export default Grid