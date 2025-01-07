import {StyleSheet, ScrollView} from 'react-native';
import UserSection from '../components/ProfilePage/UserSection/UserSection';
import SettingEditSection from '../components/ProfilePage/SettingEditSection/SettingEditSection';
import ToggleButtonSection from '../components/ProfilePage/ToggleButtonSection/ToggleButtonSection';
import LogoutButton from '../components/ProfilePage/LogoutSection/LogoutButton';

const Profile = () => {
  return (
    <ScrollView style={styles.profilePage}>
      <UserSection />
      <SettingEditSection />
      <ToggleButtonSection />
      <LogoutButton />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profilePage: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
