import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const Profile = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Watch and enjoy your favorite series</Text>
    </SafeAreaView>
  );
};

export default Profile;
