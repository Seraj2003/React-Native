import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import My from './My.jsx'
const HideShowToggle = () => {
    const [show, setShow] = useState(true);
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: 20 }}>HideShowToggle</Text>
            {
                show ? <My /> : null
            }
            <Button title='Hide' onPress={() => setShow(false)} />
            <Button title='Show' onPress={() => setShow(true)} />
            <Button title='switch' onPress={() => setShow(!show)} />
        </View>
    )
}

export default HideShowToggle