import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {THEME} from '../../../../constants/theme';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AntDesign
          name="search1"
          color={THEME.PLACE_HOLDER}
          size={20}
          style={styles.icon}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={THEME.PLACE_HOLDER}
          placeholder={'Which is your favorite series'}
        />
      </View>
    </View>
  );
};

export default SearchBar;
