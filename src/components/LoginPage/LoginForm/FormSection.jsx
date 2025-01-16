import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const FormSection = ({label = 'label', placeHolder = 'placeholder'}) => {
  return (
    <View style={styles.formSection}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.inputBox} placeholder={placeHolder} />
    </View>
  );
};

export default FormSection;

const styles = StyleSheet.create({
  formSection: {
    alignSelf: 'flex-start',
    width: '100%',
    marginHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
  inputBox: {
    height: 50,
    width: '95%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },
});
