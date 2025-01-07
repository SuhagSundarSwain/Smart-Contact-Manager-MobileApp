import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import QuickActions from '../components/ContactsPage/QuickActions/QuickActions';
import RecentContacts from '../components/ContactsPage/RecentContacts/RecentContacts';

const Contacts = () => {
  return (
    <ScrollView style={styles.contactsScreen}>
      <QuickActions />
      <RecentContacts />
    </ScrollView>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  contactsScreen: {
    paddingHorizontal: 15,
  },
});
