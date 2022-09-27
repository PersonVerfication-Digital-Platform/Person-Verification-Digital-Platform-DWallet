import React, {useState, createRef, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import SignupLogo from '../../../../signup.jpg';
import {useMoralis} from 'react-moralis';
import Button from '../../onboarding/components/Button';

const CreateUsername = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainBody}>
      <View style={{marginTop: 10, flex: 1}}>
        <View style={{alignSelf: 'center'}}>
          <Image
            source={SignupLogo}
            style={{width: 330, height: 250, marginRight: 8}}
          />
          <View style={{marginTop: 10}}>
            <Text
              style={{
                fontFamily: 'Kiwi Maru',
                fontWeight: '400',
                fontSize: 13,
                color: 'rgb(50,30,99)',
                textAlign: 'center',
                marginBottom: 12,
              }}>
              Pick your username and password
            </Text>
          </View>
          <View>
            <TextInput
              placeholder="Username"
              style={styles.inputField}></TextInput>
            <TextInput
              placeholder="Passowrd"
              style={styles.inputField}></TextInput>
            <TextInput
              placeholder="Confirm Password"
              style={styles.inputField}></TextInput>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#1652F0',
              width: 270,
              height: 45,
              alignSelf: 'center',
              borderRadius: 8,
              marginTop: 10,
            }}>
            <Text style={{alignSelf: 'center', paddingTop: 10, color: '#fff'}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateUsername;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputField: {
    alignSelf: 'center',
    backgroundColor: '#F7F8FA',
    width: '80%',
    marginBottom: 4,
    borderRadius: 8,
    paddingLeft: 14,
  },
});
