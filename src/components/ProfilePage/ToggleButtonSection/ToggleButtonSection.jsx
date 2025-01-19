import {Alert, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import ProfilePageStyle from '../ProfilePageStyle/ProfilePageStyle';
import ToggleButtonCard from './ToggleButtonCard';
import {ThemeContext} from '../../../store/context-store/ThemeContext';
import {setDarkThemeApi} from './ToggleFunctions';

const ToggleButtonSection = () => {
  const {darkMode, setDarkMode} = useContext(ThemeContext);
  const [notificationAlert, setnotificationAlert] = useState(true);

  const handleThemeChange = async val => {
    setDarkMode(val);
    try {
      const apiResponse = await setDarkThemeApi(val);
      if (val !== apiResponse) {
        Alert.alert('Error', 'Failed to update theme. Reverting changes.');
        setDarkMode(apiResponse);
      }
    } catch (error) {
      console.error('Error updating theme:', error);
      Alert.alert(
        'Error',
        'An unexpected error occurred while updating theme.',
      );
    }
  };

  return (
    <View style={ProfilePageStyle.profilePageSubsection}>
      <ToggleButtonCard
        title={'Dark Mode'}
        value={darkMode}
        onValueChange={handleThemeChange}
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
