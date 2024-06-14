import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

const TagLine = () => {
  return (
    <>
      <Text style={styles.title}>
        Watch
        <Text style={styles.text}> and enjoy {'\n'} your favorite </Text> Series
      </Text>
    </>
  );
};

export default TagLine;
