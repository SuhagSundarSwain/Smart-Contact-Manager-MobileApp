import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import isTablet from '../../../../store/AppHelper.js/isTablet';

const {height, width} = Dimensions.get('window');
const videoLink =
  'https://cdn.dribbble.com/userupload/16372142/file/original-c1b62f740beb514d22ff10f93d1f4651.mp4';

const demoFeatureList = [
  'Quick overview of recent contacts',
  'Easy access to frequently used features',
  'Customizable widgets for personalized experience',
];

const DashBoardDemo = () => {
  return (
    <LinearGradient
      colors={styles.colors}
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}
      style={styles.dbdContainer}>
      <View style={styles.videoWrapper}>
        <Video
          source={{uri: videoLink}}
          style={styles.videoPlayer}
          controls={false}
          repeat
          resizeMode="contain"
        />
      </View>
      <View style={styles.dbdInfo}>
        <Text style={styles.dbdTitle}>Intuitive Dashboard</Text>
        <Text style={styles.dbdSubTitle}>
          Experience the power of Smart Contacts with our user-friendly
          dashboard. Manage your contacts effortlessly and stay organized like
          never before.
        </Text>
        <View style={styles.featureContainer}>
          {demoFeatureList.map((feature, index) => (
            <View key={index} style={styles.feature}>
              <MaterialIcons
                name="done"
                color="green"
                size={isTablet() ? width * 0.02 : width * 0.04}
              />
              <Text style={styles.featureTxt}>{feature}</Text>
            </View>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
};

export default DashBoardDemo;

const styles = StyleSheet.create({
  colors: ['rgb(230, 230, 255)', 'rgb(240, 240, 255)', 'white'],
  dbdContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: isTablet() ? 50 : 20,
  },
  videoWrapper: {
    borderRadius: 20,
  },
  videoPlayer: {
    width: isTablet() ? width * 0.8 : width * 0.7,
    height: isTablet() ? height * 0.8 : height * 0.25,
  },
  dbdInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: isTablet() ? 20 : 10,
  },
  dbdTitle: {
    fontSize: isTablet() ? width * 0.03 : width * 0.04,
  },
  dbdSubTitle: {
    fontSize: isTablet() ? width * 0.015 : width * 0.026,
    color: 'grey',
    paddingHorizontal: isTablet() ? width * 0.1 : width * 0.025,
  },
  featureContainer: {
    alignContent: 'flex-start',
    gap: isTablet() ? 15 : 5,
  },
  feature: {
    flexDirection: 'row',
    gap: 5,
  },
  featureTxt: {
    fontSize: isTablet() ? width * 0.015 : width * 0.03,
  },
});
