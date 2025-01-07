import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SectionTitle = ({title = `Please provide 'title:'`}) => {
  return <Text style={styles.sectionTitle}>{title}</Text>;
};

export default SectionTitle;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
});
