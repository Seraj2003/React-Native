import { View, Text, ActivityIndicator, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'

const Loader = () => {
    const [loading, setLoading] = useState(false);
    const handleLoading =()=>{
        setLoading(!loading);
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableHighlight onPress={handleLoading}>
                <Text>
                    {
                        loading ? 'Show Loading' : 'Hide Loading'
                    }
                </Text>
            </TouchableHighlight>
            {
                loading && (
                    <View>
                        <ActivityIndicator size='large' color='purple'/>
                        <Text>Loading..</Text>
                    </View>
                    
                )
            }

        </View>
    );
};

export default Loader;