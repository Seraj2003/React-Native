import React from 'react';
import { FlatList } from 'react-native';
import users from './contactList.js';
import RenderItem from './RenderItem.jsx';

const ContactListScreen = () => {
  const renderItem = ({ item }) => (
    <RenderItem name={item.name} email={item.email} />
  );

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ContactListScreen;
