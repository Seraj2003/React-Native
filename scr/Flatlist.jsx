import { ScrollView, Text, FlatList,StyleSheet } from 'react-native'
import React from 'react'

const Flatlist = () => {
    const data = [
        { id: 1, item: "apple" },
        { id: 2, item: "banana" },
       
        { id: 3, item: "apple" },
        { id: 4, item: "apple" },
        { id: 5, item: "apple" },
        { id: 6, item: "apple" },
         { id: 1, item: "apple" },
        { id: 1, item: "apple" },
        { id: 1, item: "apple" },
        { id: 1, item: "apple" },
        { id: 1, item: "apple" },
        { id: 1, item: "apple" },
        { id: 1, item: "apple" },
    ];
    const renderItem = ({ item }) => (
        <ScrollView style={style.Box}>
            <Text style={style.title}>{item.item}</Text>
        </ScrollView>
    );
    return (
        <ScrollView  showsVerticalScrollIndicator={false} style={style.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtract={() => item.id}
            />
        </ScrollView>
    );
}
const style = StyleSheet.create({
    container: {
        padding: 19
    },
    Box: {
        backgroundColor: '#f2f2f2',
        padding: 19,
        marginVertical: 8,
        borderRadius: 8,
        borderBlockColor:'green',
        backgroundColor:'black',
        
    },
    title: {
        fontSize: 18,
        textAlign:'center',
        fontWeight:700,
        color:'white'

    },
})
export default Flatlist;