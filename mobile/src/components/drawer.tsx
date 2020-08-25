import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../context/User';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomDrawer = () => {
  const navigation = useNavigation();
  const {user} = useUser();

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          backgroundColor: '#bb86fc',
          height: '20%',
          justifyContent: 'center',
          paddingLeft: 10,
        }}>
        <Text
          style={{margin: 2, fontSize: 16, fontWeight: 'bold', color: 'white'}}>
          {user.name}
        </Text>
        <Text
          style={{margin: 2, fontSize: 16, fontWeight: 'bold', color: 'white'}}>
          {user.email}
        </Text>
      </View>

      <View style={{marginTop: 20, marginLeft: 10}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="list"
            size={20}
            style={{
              color: 'rgba(0, 0, 0, 0.7)',
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 10,
              color: 'rgba(0, 0, 0, 0.7)',
            }}>
            Adotar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
