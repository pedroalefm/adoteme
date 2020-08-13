import React, {useState} from 'react';
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
import {loginUser} from '../../../provider/auth';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  async function login() {
    const user = await loginUser(email, password);
    console.log(user);
  }

  return (
    <Container>
      <LogoContainer>
        <Logo source={images.Logo} />
      </LogoContainer>
      <LoginContainer>
        <InputContainer>
          <InputLabel>E-mail</InputLabel>
          <Input
            numberOfLines={1}
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>Senha</InputLabel>
          <Input
            numberOfLines={1}
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry
          />
        </InputContainer>
      </LoginContainer>
      <BtnLoginContainer onPress={() => login()}>
        <BtnLoginText>Entrar</BtnLoginText>
      </BtnLoginContainer>
      <RegisterBtnContainer onPress={() => navRegister()}>
        <RegisterBtnText>Registrar agora!</RegisterBtnText>
      </RegisterBtnContainer>
    </Container>
  );
};

export default Login;
