import { ScrollView, Text } from 'react-native'
import React from 'react'

const RenderItem = ( {name, email} ) => (
    <ScrollView style={style.Box}>
        <Text style={style.title}>{name}</Text>
        <Text style={style.title}>{email}</Text>
    </ScrollView>
);

export default RenderItem;