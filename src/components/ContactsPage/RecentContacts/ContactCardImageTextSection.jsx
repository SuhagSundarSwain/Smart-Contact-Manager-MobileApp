import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ContactCardImageTextSection = ({initials = 'S'}) => {
  return (
    <View style={styles.cardImageTextSection}>
      <Text style={styles.cardImageText}>{initials.toUpperCase()}</Text>
    </View>
  );
};

export default ContactCardImageTextSection;

const styles = StyleSheet.create({
  cardImageTextSection: {
    backgroundColor: '#cecece',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  cardImageText: {
    fontSize: 20,
    alignSelf: 'center',
  },
});
