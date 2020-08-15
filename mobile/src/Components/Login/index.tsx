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
import * as animations from '../../../assets/animations';
import {loginUser} from '../../provider/auth';
import {useNavigation} from '@react-navigation/native';
import AwesomeAlert from 'react-native-awesome-alerts';
import LottieView from 'lottie-react-native';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

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
    if (user) {
      if (user.error) {
        setAlertMessage(user.error);
        setShowAlert(true);
      } else {
        navigation.navigate('HomeScreen');
      }
    } else {
      setAlertMessage('Usuário não encontrado!');
      setShowAlert(true);
    }
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
            onChangeText={(value: any) => setEmail(value)}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>Senha</InputLabel>
          <Input
            numberOfLines={1}
            value={password}
            onChangeText={(value: any) => setPassword(value)}
            secureTextEntry
          />
        </InputContainer>
      </LoginContainer>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Problema ao efetuar login!"
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
      {/* <LottieView
        source={require('../../../assets/animations/loaderadote.json')}
        autoPlay
        loop
      /> */}
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
