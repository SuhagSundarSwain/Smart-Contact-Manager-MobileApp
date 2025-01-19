import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FormSection from './FormSection';
import formSectionList from './formSectionList';

import {SCM_BACKEND_SERVER} from '@env';
import {useDispatch, useSelector} from 'react-redux';
import {authActions} from '../../../store/redux-store/authSlice';

const LoginForm = () => {
  const dispatch = useDispatch();

  const {loginFetching} = useSelector(store => store.auth);

  const handleLogin = () => {
    userName = 'suhag@gmail.com';
    password = '123456';
    url = `${SCM_BACKEND_SERVER}/login`;
    dispatch(authActions.setLoginFetchin(true));
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userName, password}),
      credentials: 'include',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong...');
        }

        return res.json();
      })
      .then(data => {
        dispatch(authActions.setLogin(true));
      })
      .catch(err => {
        console.error(err);
        dispatch(authActions.setLoginFetchin(false));
      });
  };

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
        <Text style={styles.loginButtonText}>
          {loginFetching ? 'Loggin In...' : 'LogIn'}
        </Text>
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
