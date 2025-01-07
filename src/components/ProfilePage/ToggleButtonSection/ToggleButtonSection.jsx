import {View} from 'react-native';
import React, {useState} from 'react';
import ProfilePageStyle from '../ProfilePageStyle/ProfilePageStyle';
import ToggleButtonCard from './ToggleButtonCard';

const ToggleButtonSection = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationAlert, setnotificationAlert] = useState(true);

  return (
    <View style={ProfilePageStyle.profilePageSubsection}>
      <ToggleButtonCard
        title={'Dark Mode'}
        value={darkMode}
        onValueChange={setDarkMode}
      />
      <ToggleButtonCard
        title={'Notifications'}
        value={notificationAlert}
        onValueChange={setnotificationAlert}
      />
    </View>
  );
};

export default ToggleButtonSection;
