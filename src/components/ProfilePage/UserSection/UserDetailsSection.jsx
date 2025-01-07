import {View} from 'react-native';
import UserDetail from './UserDetail';
import userDetailsList from './userDetailsList';
import ProfilePageStyle from '../ProfilePageStyle/ProfilePageStyle';

const UserDetailsSection = () => {
  return (
    <View style={ProfilePageStyle.profilePageSubsection}>
      {userDetailsList.map(({iconName, detail}, index) => (
        <UserDetail key={index} iconName={iconName} detail={detail} />
      ))}
    </View>
  );
};

export default UserDetailsSection;
