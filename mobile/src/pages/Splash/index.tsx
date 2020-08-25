import React, {useEffect} from 'react';
import {Container, Logo} from './style';
import {useNavigation} from '@react-navigation/native';
import * as images from '../../../assets/images';
import {useUser} from '../../context/User';
import AsyncStorage from '@react-native-community/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  const {setUser} = useUser();

  useEffect(() => {
    async function getFromStorage() {
      const email = await AsyncStorage.getItem('email');
      const name = await AsyncStorage.getItem('name');

      const timeOut = async () => {
        await timeout(500);
        setUser({email, name});
        navigation.navigate(email && name ? 'HomeScreen' : 'Login');
      };
      timeOut();
    }
    getFromStorage();
  }, []);

  function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  return (
    <Container>
      <Logo source={images.Logo} />
    </Container>
  );
};

export default Splash;
