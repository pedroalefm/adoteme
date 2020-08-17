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
import {registerUser} from '../../provider/auth';
import AwesomeAlert from 'react-native-awesome-alerts';
import Loader from '../../components/loader';

const Register = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  function navLogin(): void {
    navigation.navigate('Login');
  }

  async function register() {
    const newUser = {
      name: name,
      password: password,
      email: email,
    };

    if (!name || !password || !email) {
      setAlertMessage('Estão faltando dados!');
      setShowAlert(true);
    } else {
      setShowLoader(true);
      const user = await registerUser(newUser);
      setShowLoader(false);
      navigation.navigate('HomeScreen');
    }
  }

  return (
    <Container>
      <Loader showLoader={showLoader} />

      <LogoContainer>
        <Logo source={images.Logo} />
      </LogoContainer>
      <FormContainer>
        <InputContainer>
          <InputLabel>E-mail</InputLabel>
          <Input value={email} onChangeText={(value: any) => setEmail(value)} />
        </InputContainer>

        <InputContainer>
          <InputLabel>Nome</InputLabel>
          <Input value={name} onChangeText={(value: any) => setName(value)} />
        </InputContainer>
        <InputContainer>
          <InputLabel>Senha</InputLabel>
          <Input
            value={password}
            onChangeText={(value: any) => setPassword(value)}
            secureTextEntry
          />
        </InputContainer>
      </FormContainer>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Problema no registro!"
        message={alertMessage}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        cancelText="No, cancel"
        confirmText="Fechar"
        confirmButtonColor="#6200ee"
        onCancelPressed={() => {
          setShowAlert(false);
        }}
        onConfirmPressed={() => {
          setShowAlert(false);
        }}
      />
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
