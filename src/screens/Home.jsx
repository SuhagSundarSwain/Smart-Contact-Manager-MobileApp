import {View, Text} from 'react-native';
import React from 'react';
import HomePageHeader from '../components/Home/HomePageHeader';
import FeaturesSection from '../components/Home/FeaturesSection/FeaturesSection';

const Home = () => {
  return (
    <View>
      <HomePageHeader />
      <FeaturesSection />
    </View>
  );
};

export default Home;
