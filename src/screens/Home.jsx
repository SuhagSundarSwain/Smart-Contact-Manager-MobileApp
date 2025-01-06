import {View, Text} from 'react-native';
import React from 'react';
import HomePageHeader from '../components/Home/HomePageHeader';
import FeaturesSection from '../components/Home/FeaturesSection/FeaturesSection';
import DashBoardDemo from '../components/Home/FeaturesSection/DashBoardDemo/DashBoardDemo';

const Home = () => {
  return (
    <View>
      <HomePageHeader />
      <FeaturesSection />
      <DashBoardDemo/>
    </View>
  );
};

export default Home;
