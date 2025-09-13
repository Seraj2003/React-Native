import React from 'react';
import { View } from 'react-native';
import ContactListScreen from './scr/screens/ContactListScreen.jsx';
import HideShowToggle from  './scr/HideShowToggle.jsx';
import  Indicator  from './scr/Indicator.jsx';
import  Alert  from './scr/MyAlert.jsx';
import Press from './scr/Press.jsx'
import Get_Api from './scr/Get_Api.jsx'
import POST_API from './scr/POST_API.jsx'
import Loader from './scr/Loader.jsx';
import UseEffect from './scr/UseEffect.jsx'
import Grid from './scr/Grid.jsx'
import POST_API from './scr/POST_API.jsx';
const App = () => {
  return (
    <View style={{flex:1}} showsVerticalScrollIndicator={false}>
      {/* <ContactListScreen /> */}
      {/* <Grid/> */}
      {/* <UseEffect/> */}
      {/* <HideShowToggle />
      <Indicator/>
      <Loader/>
      <Press/> */}
      {/* <Alert/> */}
      {/* <Get_Api/> */}
      <POST_API/>
    </View>
  );
};

export default App;
