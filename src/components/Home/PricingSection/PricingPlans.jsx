import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import React from 'react';
import PriceCard from './PriceCard';
import pricingPlanList from './PricingPlanList';
import LinearGradient from 'react-native-linear-gradient';
import isTablet from '../../../store/AppHelper.js/isTablet';

const {width} = Dimensions.get('window');

const PricingPlans = () => {
  return (
    <LinearGradient
      colors={styles.colors}
      start={styles.start}
      end={styles.end}
      style={styles.pricingContainer}>
      <Text style={styles.title}>Flexible Pricing Plans</Text>
      <FlatList
        data={pricingPlanList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <PriceCard
            title={item.title}
            priceRate={item.priceRate}
            benefits={item.benefits}
          />
        )}
        horizontal
        contentContainerStyle={{
          gap: isTablet() ? 70 : 50,
          paddingHorizontal: isTablet() ? 50 : 40,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </LinearGradient>
  );
};

export default PricingPlans;

const styles = StyleSheet.create({
  colors: ['rgb(240, 240, 255)', 'rgb(250, 250, 255)', 'rgb(240, 240, 255)'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
  title: {
    fontSize: isTablet() ? width * 0.03 : width * 0.04,
  },
  pricingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: isTablet() ? 50 : 20,
    gap: isTablet() ? 40 : 20,
  },
});
