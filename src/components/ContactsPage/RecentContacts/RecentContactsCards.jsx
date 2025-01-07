import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ContactCardImageTextSection from './ContactCardImageTextSection';
import ContactDetails from './ContactDetails';
import ContactCard from './ContactCard';
import RecentContactsList from './RecentContactsList';

const RecentContactsCards = () => {
  return (
    <View style={styles.contactCard}>
      {RecentContactsList.map(({name, phone}, index) => (
        <ContactCard key={index} name={name} phone={phone} />
      ))}
    </View>
  );
};

export default RecentContactsCards;

const styles = StyleSheet.create({
  contactCard: {
    gap: 10,
  },
});
