import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {styles} from './styles';
import TagLine from './components/tagline';
import SearchBar from './components/searchBar';
import PopularSection from './components/popularSection';
import Header from './components/header';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <TagLine />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PopularSection />
        <PopularSection />
        <PopularSection />
        <PopularSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
