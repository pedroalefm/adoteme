import React, {useState} from 'react';
import {Container} from './style';
import * as images from '../../../assets/images';
import {useNavigation} from '@react-navigation/native';

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

  return <Container></Container>;
};

export default Home;
