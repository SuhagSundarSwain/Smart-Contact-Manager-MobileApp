import {StyleSheet} from 'react-native';

const ProfilePageStyle = StyleSheet.create({
  profilePageSubsection: {
    alignSelf: 'flex-start',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 20,
  },
  profilePageSmallCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 10,
  },
  profilePageSmallCardText: {
    fontSize: 15,
    fontWeight: 400,
  },
  iconSize: 25,
});

export default ProfilePageStyle;
