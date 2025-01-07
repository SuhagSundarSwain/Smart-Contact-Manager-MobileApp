import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const QuickActionButton = ({title, iconName, buttonColor, textColor}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.quickActionButton, {backgroundColor: buttonColor}]}
      onPress={() => navigation.navigate(title)}>
      <Feather name={iconName} color={textColor} size={20} />
      <Text style={{color: textColor, fontWeight: 'bold'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default QuickActionButton;

const styles = StyleSheet.create({
  quickActionButton: {
    alignItems: 'center',
    padding: 25,
    flex: 1,
    borderRadius: 10,
    gap: 5,
  },
});
