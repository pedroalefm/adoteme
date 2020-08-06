import React from 'react';
import {
  Container,
  Title,
  LogoContainer,
  Input,
  LoginContainer,
  BtnLoginContainer,
  BtnLoginText,
  RegisterBtnContainer,
  RegisterBtnText,
  InputLabel,
  InputContainer,
  Logo,
} from './style';
import * as images from '../../../assets/images';

import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();
      }),
    [navigation],
  );

  function navRegister(): void {
    navigation.navigate('Register');
  }

  return (
    <Container>
      <LogoContainer>
        <Logo source={images.Logo} />
      </LogoContainer>
      <LoginContainer>
        <InputContainer>
          <InputLabel>E-mail</InputLabel>
          <Input numberOfLines={1} />
        </InputContainer>
        <InputContainer>
          <InputLabel>Senha</InputLabel>
          <Input numberOfLines={1} />
        </InputContainer>
      </LoginContainer>
      <BtnLoginContainer>
        <BtnLoginText>Entrar</BtnLoginText>
      </BtnLoginContainer>
      <RegisterBtnContainer onPress={() => navRegister()}>
        <RegisterBtnText>Registrar agora!</RegisterBtnText>
      </RegisterBtnContainer>
    </Container>
  );
};

export default Login;
