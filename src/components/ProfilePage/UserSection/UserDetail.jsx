import {Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfilePageStyle from '../ProfilePageStyle/ProfilePageStyle';

const UserDetail = ({iconName, detail}) => {
  return (
    <View style={ProfilePageStyle.profilePageSmallCard}>
      <MaterialIcons
        name={iconName}
        color="grey"
        size={ProfilePageStyle.iconSize}
      />
      <Text style={ProfilePageStyle.profilePageSmallCardText}>{detail}</Text>
    </View>
  );
};

export default UserDetail;
