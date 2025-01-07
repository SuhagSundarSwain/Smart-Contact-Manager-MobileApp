import {View, Text} from 'react-native';
import React from 'react';
import SectionTitle from '../../CommonComponents/SectionTitle';
import RecentContactsCards from './RecentContactsCards';

const RecentContacts = () => {
  return (
    <View>
      <SectionTitle title={'Recent Contacts'} />
      <RecentContactsCards />
    </View>
  );
};

export default RecentContacts;
