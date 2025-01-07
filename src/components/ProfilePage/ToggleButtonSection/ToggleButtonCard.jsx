import {StyleSheet, Switch, Text, View} from 'react-native';
import ProfilePageStyle from '../ProfilePageStyle/ProfilePageStyle';

const ToggleButtonCard = ({title, value, onValueChange}) => {
  return (
    <View
      style={[ProfilePageStyle.profilePageSmallCard, styles.toggleButtonCard]}>
      <Text style={ProfilePageStyle.profilePageSmallCardText}>{title}</Text>
      <Switch
        trackColor={{false: '#E4E4E7', true: '#18181B'}}
        thumbColor={'white'}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
};

export default ToggleButtonCard;

const styles = StyleSheet.create({
  toggleButtonCard: {
    justifyContent: 'space-between',
  },
});
