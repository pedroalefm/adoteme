import React, {useEffect, useState} from 'react';
import {
  Container,
  FormContainer,
  InputContainer,
  InputLabel,
  Input,
  BtnRegisterContainer,
  BtnRegisterText,
  LogoContainer,
  LoginBtnContainer,
  LoginBtnText,
  Logo,
} from './style';
import {useNavigation} from '@react-navigation/native';
import * as images from '../../../assets/images';

const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function navLogin(): void {
    navigation.navigate('Login');
  }

  function register() {

  }

  return (
    <Container>
      <LogoContainer>
        <Logo source={images.Logo} />
      </LogoContainer>
      <FormContainer>
        <InputContainer>
          <InputLabel>E-mail</InputLabel>
          <Input value={email} onChange={(value) => setEmail(value)} />
        </InputContainer>

        <InputContainer>
          <InputLabel>Nome</InputLabel>
          <Input value={name} onChange={(value) => setName(value)} />
        </InputContainer>
        <InputContainer>
          <InputLabel>Senha</InputLabel>
          <Input
            value={password}
            onChange={(value) => setPassword(value)}
            secureTextEntry
          />
        </InputContainer>
      </FormContainer>
      <BtnRegisterContainer onPress={() => register()}>
        <BtnRegisterText>Criar conta</BtnRegisterText>
      </BtnRegisterContainer>

      <LoginBtnContainer onPress={() => navLogin()}>
        <LoginBtnText>Já possuo uma conta!</LoginBtnText>
      </LoginBtnContainer>
    </Container>
  );
};

export default Register;
