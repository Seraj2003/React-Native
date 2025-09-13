import { View, Text, Button, Alert } from 'react-native';
import React from 'react';

const MyAlert = () => {
  const handleAlert = () => {
    Alert.alert(
      'Status',
      'Registration Confirmed',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed')
        },
       
      ],
       {cancelable:false}
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 23, textAlign: 'center', fontWeight: '500' }}>
        Alert
      </Text>
      <Button title="Confirm" onPress={handleAlert} />
    </View>
  );
};

export default MyAlert;
