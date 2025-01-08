import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import addContactFieldList from './addContactFieldList';

const AddContactForm = () => {
  return (
    <View>
      {addContactFieldList.map(
        (
          {label, placeHolder, inputType = 'default', multiLine = false},
          index,
        ) => (
          <View key={index} style={styles.formField}>
            <Text style={styles.label}>{`${label} :`}</Text>
            <TextInput
              style={[styles.textInput, multiLine && styles.textArea]}
              placeholder={placeHolder}
              keyboardType={inputType}
              multiline={multiLine}
              numberOfLines={multiLine ? 4 : 1}
            />
          </View>
        ),
      )}
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, {backgroundColor: 'black'}]}>
          <Text style={styles.buttonText}>Add Contact</Text>
        </Pressable>
        <Pressable style={[styles.button, {backgroundColor: '#BB2D3B'}]}>
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddContactForm;

const styles = StyleSheet.create({
  formField: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
  },
  textInput: {
    width: '95%',
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },
  textArea: {
    height: 100,
  },
  buttonContainer: {
    margin: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  button: {
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
});
