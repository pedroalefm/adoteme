import React, {useEffect, useState} from 'react';
import {View, Modal} from 'react-native';
import LottieView from 'lottie-react-native';
import * as animations from '../../assets/animations/index';

interface PropsTypes {
  showLoader: Boolean;
}

const Loader = (props: PropsTypes) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.showLoader);
  }, [props.showLoader]);

  return (
    <Modal visible={show} transparent>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(187,187,187,0.7)',
        }}>
        <LottieView source={animations.Loader} autoPlay loop />
      </View>
    </Modal>
  );
};

export default Loader;
