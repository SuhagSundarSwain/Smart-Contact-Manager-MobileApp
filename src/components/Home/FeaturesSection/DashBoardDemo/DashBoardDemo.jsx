import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

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
              <MaterialIcons name="done" color="green" size={width * 0.04} />
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
    paddingVertical: 10,
  },
  videoWrapper: {
    borderRadius: 20,
  },
  videoPlayer: {
    width: width * 0.7,
    height: height * 0.25,
  },
  dbdInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: 10,
  },
  dbdTitle: {
    fontSize: width * 0.04,
  },
  dbdSubTitle: {
    fontSize: width * 0.026,
    color: 'grey',
    paddingHorizontal: width * 0.025,
  },
  featureContainer: {
    alignContent: 'flex-start',
    gap: 5,
  },
  feature: {
    flexDirection: 'row',
    gap: 5,
  },
  featureTxt: {
    fontSize: width * 0.03,
  },
});
