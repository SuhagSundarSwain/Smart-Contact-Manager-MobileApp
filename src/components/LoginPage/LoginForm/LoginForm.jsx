import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FormSection from './FormSection';
import formSectionList from './formSectionList';

const handleLogin = () => {
  console.log(process.env.REACT_APP_SCM_BACKEND_SERVER);
};

const LoginForm = () => {
  return (
    <View style={styles.loginForm}>
      <Text style={styles.formTitle}>Login</Text>

      {formSectionList.map(({label, placeHolder}, index) => (
        <FormSection key={index} label={label} placeHolder={placeHolder} />
      ))}

      <Pressable
        style={styles.loginButton}
        onPress={() => {
          handleLogin();
        }}>
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>
      <View style={styles.dhaSection}>
        <Text>Don't have an account?</Text>
        <Pressable>
          <Text style={styles.signUp}>Sign up</Text>
        </Pressable>
      </View>
      <Pressable>
        <Text style={styles.fyp}>Forgot your Password ?</Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  loginForm: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    marginVertical: 100,
    marginHorizontal: 10,
  },
  formTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginHorizontal: 10,
  },

  loginButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    width: '95%',
    textAlign: 'center',
    marginVertical: 30,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dhaSection: {
    flexDirection: 'row',
    gap: 5,
  },
  signUp: {
    fontWeight: 'bold',
  },
  fyp: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
