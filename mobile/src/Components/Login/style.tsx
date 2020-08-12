import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fcfcfc;
  flex: 1;
`;

export const LogoContainer = styled.View`
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200;
  background-color: #bb86fc;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const Logo = styled.Image`
  width: 200;
  height: 200;
`;

export const Title = styled.Text`
  font-size: 22;
  color: #424242;
`;

export const LoginContainer = styled.View`
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  margin-top: 30px;
`;

export const InputContainer = styled.View`
  width: 100%;
  margin: 5px;
  align-items: center;
`;
export const Input = styled.TextInput`
  border-radius: 10;
  width: 90%;
  border-color: #bb86fc;
  border-width: 2;
  background: white;
`;
export const InputLabel = styled.Text`
  font-size: 14;
  color: #424242;
  font-weight: bold;
  margin-left: 5%;
  align-self: flex-start;
`;

export const BtnLoginContainer = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #6200ee;
  border-radius: 20;
  border-color: white;
  border-width: 1;
  width: 150;
  height: 50;
  margin-top: 20px;
`;

export const BtnLoginText = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: white;
`;

export const RegisterBtnContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 10;
  align-self: center;
`;
export const RegisterBtnText = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: #6200ee;
`;
