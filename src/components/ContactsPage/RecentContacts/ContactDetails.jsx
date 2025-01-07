import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ContactDetails = ({
  contactName = 'Contact Name',
  contactNumber = 'Contact Number',
}) => {
  return (
    <View style={styles.contactDetails}>
      <Text style={styles.contactName}>{contactName}</Text>
      <Text style={styles.contactNumber}>{contactNumber}</Text>
    </View>
  );
};

export default ContactDetails;

const styles = StyleSheet.create({
  contactDetails: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    gap: 2,
  },
  contactName: {
    fontSize: 17,
    fontWeight: 600,
  },
  contactNumber: {
    color: 'grey',
  },
});
