import {View} from 'react-native';
import SettingEdit from './SettingEdit';
import settingEditList from './settingEditList';
import ProfilePageStyle from '../ProfilePageStyle/ProfilePageStyle';

const SettingEditSection = () => {
  return (
    <View style={ProfilePageStyle.profilePageSubsection}>
      {settingEditList.map(({settingIcon, settingTitle}, index) => (
        <SettingEdit
          key={index}
          iconName={settingIcon}
          settingName={settingTitle}
        />
      ))}
    </View>
  );
};

export default SettingEditSection;
