import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const dataItem = [
  {
    id: '1',
    title: 'Fruits',
    data: [
      { id: '1-1', name: 'Apple', price: 50 },
      { id: '1-2', name: 'Banana', price: 20 },
      { id: '1-3', name: 'Mango', price: 100 },
    ],
  },
  {
    id: '2',
    title: 'Vegetables',
    data: [
      { id: '2-1', name: 'Carrot', price: 30 },
      { id: '2-2', name: 'Potato', price: 10 },
      { id: '2-3', name: 'Tomato', price: 25 },
    ],
  },
  {
    id: '3',
    title: 'Dairy',
    data: [
      { id: '3-1', name: 'Milk', price: 40 },
      { id: '3-2', name: 'Cheese', price: 150 },
      { id: '3-3', name: 'Butter', price: 120 },
    ],
  },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.name} - ₹{item.price}</Text>
  </View>
);

const renderSectionHeader = ({ section }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{section.title}</Text>
  </View>
);

const MySectionList = () => {
  return (
    <SectionList
      sections={dataItem}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  sectionHeader: {
    backgroundColor: '#ddd',
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MySectionList;
