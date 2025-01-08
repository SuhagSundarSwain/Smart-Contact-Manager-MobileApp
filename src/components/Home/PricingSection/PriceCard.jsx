import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import isTablet from '../../../store/AppHelper.js/isTablet';

const {width} = Dimensions.get('window');

const PriceCard = ({title, priceRate, benefits}) => {
  return (
    <View style={styles.priceCard}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.rate}>{`${priceRate}month`}</Text>
      {benefits.map((benefit, index) => (
        <View key={index} style={styles.benefit}>
          <MaterialIcons
            name="done"
            color="green"
            size={isTablet() ? width * 0.02 : width * 0.04}
          />
          <Text style={styles.benefitText}>{benefit}</Text>
        </View>
      ))}
      <Pressable style={styles.priceSelectButton}>
        <Text style={styles.priceSelectButtonText}>Select Plan</Text>
      </Pressable>
    </View>
  );
};

export default PriceCard;

const styles = StyleSheet.create({
  priceCard: {
    backgroundColor: 'white',
    paddingVertical: isTablet() ? 20 : 10,
    paddingHorizontal: isTablet() ? 30 : 20,
    gap: isTablet() ? 20 : 10,
    width: isTablet() ? width * 0.35 : width * 0.5,
    borderRadius: isTablet() ? 30 : 20,
    shadowColor: 'blue',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: isTablet() ? width * 0.03 : width * 0.05,
    fontWeight: 'bold',
  },
  rate: {
    fontWeight: 'bold',
    fontSize: isTablet() ? width * 0.03 : width * 0.04,
  },
  benefit: {
    flexDirection: 'row',
    gap: 5,
  },
  benefitText: {
    fontSize: isTablet() ? 20 : 13,
  },
  priceSelectButton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 10,
  },
  priceSelectButtonText: {
    color: 'white',
  },
});
