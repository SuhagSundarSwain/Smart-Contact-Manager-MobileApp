import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import QuickActions from '../components/ContactsPage/QuickActions/QuickActions';
import RecentContacts from '../components/ContactsPage/RecentContacts/RecentContacts';

const Contacts = () => {
  return (
    <View style={styles.contactsScreen}>
      <QuickActions />
      <RecentContacts />
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  contactsScreen: {
    paddingHorizontal: 15,
  },
});
