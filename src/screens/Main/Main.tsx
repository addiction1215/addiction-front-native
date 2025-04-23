import React from 'react';
import { images } from '../../assets/Images';
import styled from 'styled-components/native'; 
import { Dimensions } from 'react-native';

const Main = () => {

  const screenWidth = Dimensions.get('window').width;
  
  return (
    <LoginContainer>
      {/* Logo */}
      <Logo source={images.main_logo} logoWidth = {screenWidth}  resizeMode="contain"/>

      {/* Character */}
      <Character source={images.main_character} characterWidth = {screenWidth} resizeMode="contain"/>

      {/* Social Login Buttons */}
      <SocialLoginContainer>
        <IconButton>
          <IconImage source={images.naver_login} />
        </IconButton>
        <IconButton>
          <IconImage source={images.kakao_login} />
        </IconButton>
        <IconButton>
          <IconImage source={images.google_login} />
        </IconButton>
      </SocialLoginContainer>

      {/* Email Signup/Login Links */}
      <ButtonContainer>
        <TextButton>
          <TextButtonLabel>이메일 회원가입</TextButtonLabel>
        </TextButton>
        <TextButtonLabel> | </TextButtonLabel>
        <TextButton>
          <TextButtonLabel>이메일 로그인</TextButtonLabel>
        </TextButton>
      </ButtonContainer>
    </LoginContainer>
  );
};

export default Main;

const LoginContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const Logo = styled.Image<{logoWidth: number}>`
  width: ${(props) => props.logoWidth * 0.8}px;
  height: ${(props) => props.logoWidth * 0.8 * 0.3}px;
  max-width: 400px;  
  max-height: 120px; 
`;

const Character = styled.Image<{characterWidth: number}>`
  width: ${(props) => props.characterWidth * 0.5}px;
  height: ${(props) => props.characterWidth * 0.5}px;
  max-width: 300px;  
  max-height: 300px; 
`;

const SocialLoginContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const IconButton = styled.TouchableOpacity`
  margin: 10px;
  width: 60px;
  justify-content: center;
  align-items: center;
`;

const IconImage = styled.Image`
  width: 50px;
  height: 50px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextButton = styled.TouchableOpacity`
  padding: 4px 8px;
`;

const TextButtonLabel = styled.Text`
  font-size: 14px;
  color: #b0b0b0;
`;