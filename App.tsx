import {View, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View>
      <AntDesign name="stepforward" color="#ff0000" size={20} />
      <Text style={{color: '#000', fontFamily: 'Poppins-Light'}}>Press</Text>
      <Text style={{color: '#000'}}>Press</Text>
    </View>
  );
};

export default App;
