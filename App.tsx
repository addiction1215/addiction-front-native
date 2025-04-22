import React from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { images } from './src/assets/Images';

const Main = () => {
  return (
    <View style={styles.loginContainer}>
      {/* Logo */}
      <Image source={images.main_logo} style={styles.logo} />

      {/* Character */}
      <Image source={images.main_character} style={styles.character} />

      {/* Social Login Buttons */}
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={images.naver_login} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={images.kakao_login} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={images.google_login} style={styles.iconImage} />
        </TouchableOpacity>
      </View>

      {/* Email Signup/Login Links */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.textButton}>이메일 회원가입</Text>
        </TouchableOpacity>
        <Text style={styles.separator}> | </Text>
        <TouchableOpacity>
          <Text style={styles.textButton}>이메일 로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  loginContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 20,
  },
  logo: {
    width: '60%',
    height: '10%',
    margin: 20,
  },
  character: {
    width: '50%',
    height: '30%',
    margin: 20,
  },
  socialLoginContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    display: 'flex',
    borderWidth: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    margin: 10,
    width: 60,
    justifyContent: 'center',
  },
  iconImage: {
    width: 50,
    height: 50,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    fontSize: 14,
    color: '#b0b0b0',
  },
  textButton: {
    backgroundColor: 'white',
    borderWidth: 0,
    padding: 0,
    fontSize: 14,
    color: '#b0b0b0',
    cursor: 'pointer',
  },
  separator: {
    color: '#b0b0b0',
    fontSize: 14,
  },
});
