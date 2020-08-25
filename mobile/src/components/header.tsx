import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {SearchBar} from 'react-native-elements';

interface PropTypes {
  title: String;
  searchOn: Boolean;
}

const Header = (props: PropTypes) => {
  const navigation = useNavigation();
  const [searchToggle, setSearchToggle] = useState(false);
  const [search, updateSearch] = useState('');

  return (
    <View
      style={{
        width: '100%',
        height: 60,
        backgroundColor: searchToggle ? 'transparent' : '#bb86fc',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
      }}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{position: 'absolute', left: 10}}>
        <Icon
          name="bars"
          size={25}
          style={{
            color: 'white',
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
        }}>
        {props.title}
      </Text>

      {props.searchOn && (
        <TouchableOpacity
          onPress={() => setSearchToggle(true)}
          style={{position: 'absolute', right: 10}}>
          <Icon
            name="search"
            size={25}
            style={{
              color: 'white',
            }}
          />
        </TouchableOpacity>
      )}

      {searchToggle && (
        <View style={{width: '100%'}}>
          <SearchBar
            placeholder="Buscar..."
            onChangeText={updateSearch}
            value={search}
            platform="ios"
            onCancel={() => setSearchToggle(false)}
            showCancel={true}
            cancelButtonTitle="Cancelar"
          />
        </View>
      )}
    </View>
  );
};

export default Header;
