import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const Flatlist1 = () => {
  const data = [
    { id: 1, item: "apple" },
    { id: 2, item: "banana" },
    { id: 3, item: "orange" },
    { id: 4, item: "grapes" },
    { id: 5, item: "mango" },
    { id: 6, item: "pineapple" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  item: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
  },
});

export default Flatlist1;
