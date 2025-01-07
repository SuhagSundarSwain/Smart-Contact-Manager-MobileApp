import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/AntDesign';
import isTablet from '../../store/AppHelper.js/isTablet';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const HomePageHeader = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={styles.bgColors}
      start={{x: 0, y: 0}} // Gradient starts from top
      end={{x: 0, y: 1}} // Gradient ends at bottom
      style={styles.hphContainer}>
      <Text style={styles.title}>
        Revolutionize Your{' '}
        <Text style={{color: '#0000FF'}}>Contact Management</Text>
      </Text>
      <Text style={styles.subTitle}>
        Streamline your connections, boost productivity, and never lose touch
        with Smart Contacts - the ultimate solution for modern professionals.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.gsButton}
          onPress={() => navigation.navigate('Contacts')}>
          <Text style={{color: 'white'}}>
            Get Started <Icon name="arrowright" color="white" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wdButton}>
          <Text>Watch Demo</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HomePageHeader;

const styles = StyleSheet.create({
  bgColors: ['rgb(230, 230, 255)', 'rgb(240, 240, 255)', 'white'],
  hphContainer: {
    paddingVertical: isTablet() ? 50 : 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: isTablet() ? 20 : 5,
  },
  title: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  subTitle: {
    paddingHorizontal: width * 0.025,
    fontSize: isTablet() ? width * 0.02 : width * 0.026,
    textAlign: 'center',
    color: 'grey',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  gsButton: {
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  wdButton: {
    borderRadius: 10,
    padding: 10,
  },
});
