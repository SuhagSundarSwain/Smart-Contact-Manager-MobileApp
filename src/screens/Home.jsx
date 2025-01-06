import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import HomePageHeader from '../components/Home/HomePageHeader';
import FeaturesSection from '../components/Home/FeaturesSection/FeaturesSection';
import DashBoardDemo from '../components/Home/FeaturesSection/DashBoardDemo/DashBoardDemo';
import PricingPlans from '../components/Home/PricingSection/PricingPlans';

const Home = () => {
  return (
    <ScrollView>
      <HomePageHeader />
      <FeaturesSection />
      <DashBoardDemo />
      <PricingPlans />
    </ScrollView>
  );
};

export default Home;
