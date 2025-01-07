import {View, Text, Image, StyleSheet} from 'react-native';
import UserDetailsSection from './UserDetailsSection';

const UserSection = () => {
  const imageLink =
    'https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg';
  return (
    <View style={styles.userSection}>
      <Image
        source={{
          uri: imageLink,
        }}
        style={styles.prfilePicture}
      />
      <View style={styles.nameSection}>
        <Text style={styles.userName}>Suhag Swain</Text>
        <Text style={styles.userAbout}>Software Engineer</Text>
      </View>

      <UserDetailsSection />
    </View>
  );
};

export default UserSection;

const styles = StyleSheet.create({
  userSection: {
    alignItems: 'center',
  },
  prfilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameSection: {
    alignItems: 'center',
    gap: 2,
  },
  userName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  userAbout: {
    fontSize: 15,
    color: 'grey',
  },
});
