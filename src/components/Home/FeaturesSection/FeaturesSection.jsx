import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FeatureCardList from './FeatureCardsList';

const {width} = Dimensions.get('window');

const FeaturesSection = () => {
  return (
    <LinearGradient
      colors={styles.bgColors}
      start={{x: 0, y: 0}} // Starts from the left
      end={{x: 1, y: 0}} // Ends to the right
      style={styles.fsContainer}>
      <Text style={styles.title}>Powerful Features</Text>
      <FlatList
        horizontal
        data={FeatureCardList}
        keyExtractor={item => item.logo}
        contentContainerStyle={{gap: 20, paddingHorizontal: 20}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.fetureCard}>
            <FeatherIcon name={item.logo} color="blue" size={25} />
            <Text>{item.title}</Text>
            <Text>{item.subtitle}</Text>
          </View>
        )}
      />
    </LinearGradient>
  );
};

export default FeaturesSection;

const styles = StyleSheet.create({
  bgColors: ['rgb(240, 240, 255)', 'rgb(250, 250, 255)', 'rgb(240, 240, 255)'],
  fsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    gap: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: width * 0.04,
  },
  fetureCard: {
    alignItems: 'center',
    gap: 10,
    width: width * 0.75,
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
});
