import React, {useEffect} from 'react';
import {Container, Logo} from './style';
import {useNavigation} from '@react-navigation/native';
import * as images from '../../../assets/images';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeOut = async () => {
      await timeout(500);
      navigation.navigate('Login');
    };
    timeOut();
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
