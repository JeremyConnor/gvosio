import React, {useState, useEffect, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  NativeModules,
  Platform
} from 'react-native';
import * as Realm from 'realm';
import Loader from './Components/Loader';

const userSchema = {
  name: 'users',
  primaryKey: 'address',
  properties: {
    emailID: 'string',
    password: 'string',
    address: 'string',
    pin: 'string',
  }
};

const SignUpScreen = (props) => {

  const [userEmail, setUserEmail] = useState('');
  const [userKey, setUserKey] = useState('');
  const [userPin1, setUserPin1] = useState('');
  const [userPin2, setUserPin2] = useState('');
  const [pinConfirmation, setPin] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const emailInputRef = createRef();
  const keyInputRef = createRef();
  const pinInputRef = createRef();
  const confirmPinInputRef = createRef();
  const addressInputRef = createRef();
  const passwordInputRef = createRef();

  const confirmUserPin = async () => {
    if(userPin1 != userPin2){
      setPin({
        ...pinConfirmation,
        pinConfirmation: false
      });
      console.log("Your pin does not match!");
      console.log(`Expected: ${userPin1}, Got: ${userPin2}`);
      Alert.alert(
        `Warning`,
        `Your Pin does not match!`,
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    }
    else {
      setPin({
        ...pinConfirmation,
        pinConfirmation: true
      });
      console.log("Your pin matches!");
    }
  };

  return();

};

export default SignUpScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#FF6347',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});