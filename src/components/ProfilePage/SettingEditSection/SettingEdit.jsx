import {Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfilePageStyle from '../ProfilePageStyle/ProfilePageStyle';

const SettingEdit = ({
  iconName = 'question-mark',
  settingName = 'please provide name',
}) => {
  return (
    <TouchableOpacity style={ProfilePageStyle.profilePageSmallCard}>
      <MaterialIcons
        name={iconName}
        color="black"
        size={ProfilePageStyle.iconSize}
      />
      <Text style={ProfilePageStyle.profilePageSmallCardText}>
        {settingName}
      </Text>
    </TouchableOpacity>
  );
};

export default SettingEdit;
