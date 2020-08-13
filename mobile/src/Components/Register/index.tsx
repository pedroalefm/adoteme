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
import {registerUser} from '../../../provider/auth';

const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function navLogin(): void {
    navigation.navigate('Login');
  }

  async function register() {
    const newUser = {
      name: name,
      password: password,
      email: email,
    };

    const user = await registerUser(newUser);
  }

  return (
    <Container>
      <LogoContainer>
        <Logo source={images.Logo} />
      </LogoContainer>
      <FormContainer>
        <InputContainer>
          <InputLabel>E-mail</InputLabel>
          <Input value={email} onChangeText={(value) => setEmail(value)} />
        </InputContainer>

        <InputContainer>
          <InputLabel>Nome</InputLabel>
          <Input value={name} onChangeText={(value) => setName(value)} />
        </InputContainer>
        <InputContainer>
          <InputLabel>Senha</InputLabel>
          <Input
            value={password}
            onChangeText={(value) => setPassword(value)}
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
