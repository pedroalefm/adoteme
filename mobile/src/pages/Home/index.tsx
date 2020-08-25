import React, {useState} from 'react';
import {Container} from './style';
import * as images from '../../../assets/images';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header';
const Home = () => {
  const navigation = useNavigation();
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();
      }),
    [navigation],
  );

  return (
    <Container>
      <Header title={'Adotar'} searchOn />
    </Container>
  );
};

export default Home;
