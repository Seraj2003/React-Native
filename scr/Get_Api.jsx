import { View, Text, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Get_Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(result => setData(result))
    //   .catch(error => console.error(error));
    axios.get('https://jsonplaceholder.typicode.com/posts').then((result)=> 
        setData(result.data)
    )
  }, []);

  return (
    <View style={{ padding: 20 }}>
      {
        data.map((item ,id)=> (
            <Text key={id}>{item.title} {item.body} {item.id}</Text>
        ))
      }
    </View>
  );
};

export default Get_Api;
