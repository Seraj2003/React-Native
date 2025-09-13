import React from 'react';
import { View, Text, Pressable } from 'react-native';

const PressableDemo = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
      <Pressable
        // onPress={() => alert("Pressed!")}
        // // onLongPress={() => alert("Long Pressed!")}
        delayLongPress={5000}
       
        disabled={false}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        android_ripple={{ color: "purple", borderless: false }}
        style={({ pressed }) => [
          {
            padding: 15,
            borderRadius: 10,
            backgroundColor: pressed ? "#ddd" : "#f2f2f2",
          }
        ]}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Press Me</Text>
      </Pressable>

    </View>
  );
};

export default PressableDemo;
