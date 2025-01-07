import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ContactCardImageTextSection from './ContactCardImageTextSection';
import ContactDetails from './ContactDetails';

const ContactCard = ({name, phone}) => {
  const initials = name.charAt(0);
  return (
    <TouchableOpacity style={styles.contactCard}>
      <ContactCardImageTextSection initials={initials} />
      <ContactDetails contactName={name} contactNumber={phone} />
    </TouchableOpacity>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  contactCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
});
