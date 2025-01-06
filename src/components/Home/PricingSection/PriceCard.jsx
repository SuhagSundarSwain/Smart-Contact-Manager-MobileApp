import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

const PriceCard = ({title, priceRate, benefits}) => {
  return (
    <View style={styles.priceCard}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.rate}>{`${priceRate}month`}</Text>
      {benefits.map((benefit, index) => (
        <View key={index} style={styles.benefit}>
          <MaterialIcons name="done" color="green" size={width * 0.04} />
          <Text>{benefit}</Text>
        </View>
      ))}
    </View>
  );
};

export default PriceCard;

const styles = StyleSheet.create({
  priceCard: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 10,
    width: width * 0.5,
    borderRadius: 20,
    shadowColor: 'blue',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  rate: {
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
  benefit: {
    flexDirection: 'row',
    gap: 5,
  },
});
