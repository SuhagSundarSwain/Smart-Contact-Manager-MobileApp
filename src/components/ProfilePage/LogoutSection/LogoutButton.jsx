import {Pressable, StyleSheet, Text} from 'react-native';
import ProfilePageStyle from '../ProfilePageStyle/ProfilePageStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LogoutButton = () => {
  return (
    <Pressable
      style={[ProfilePageStyle.profilePageSubsection, styles.logoutButton]}>
      <MaterialIcons
        name="logout"
        color="white"
        size={ProfilePageStyle.iconSize}
      />
      <Text
        style={[
          ProfilePageStyle.profilePageSmallCardText,
          styles.logoutButtonText,
        ]}>
        Logout
      </Text>
    </Pressable>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  logoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#EF4444',
    flexDirection: 'row',
    gap: 15,
  },
  logoutButtonText: {
    color: 'white',
  },
});
