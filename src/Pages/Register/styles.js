import styled from 'styled-components/native';
import { Text, TouchableOpacity, FlatList, Platform, Keyboard, Alert, SafeAreaView, AsyncStorage} from 'react-native';


export const Container = styled.View`
  flex: 1;
  backgroundColor: #E5E5E5;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  width: 85%;
  height: 173px;
  margin-top: -50px;
  border-radius: 40px;
  align-items: center;    
  background: #FFFFFF;
`;

export const TitleText = styled.Text`
  font-size: 24;
  margin-top: 100px;
`;

export const Input = styled.TextInput`
  margin-top: 10;
  width: 250;
  height: 59;
  border-radius: 4;
  padding: 5px 10px;
  background: #FFFFFF;
`

export const LoginButton = styled.TouchableOpacity`
  width: 250;
  height: 38;
  margin-top: 30;
  border-radius: 4;
  align-items: center;
  justify-content: center;
  background: #6200EE;
`
export const Register = styled.TouchableOpacity`
  width: 250;
  height: 38;
  margin-top: 10;
  border-radius: 4;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
`

export const TextRegister = styled.Text`
  font-size: 18;
  color: #6200EE;
`

export const TextButton = styled.Text`
  font-size: 18;
  color: #FFFFFF;
`

export const Body = styled.View`
  flex: 1;
  font-family: Roboto;
  font-weight: normal;
  margin-top: 70;
    
`;