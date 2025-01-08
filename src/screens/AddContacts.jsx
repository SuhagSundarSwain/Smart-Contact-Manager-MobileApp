import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import AddContactForm from '../components/AddContactPage/AddContactForm';

const AddContacts = () => {
  return (
    <ScrollView style={styles.addContactPage}>
      <AddContactForm />
    </ScrollView>
  );
};

export default AddContacts;

const styles = StyleSheet.create({
  addContactPage: {
    padding: 15,
  },
});
