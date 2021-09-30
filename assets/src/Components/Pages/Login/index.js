import React, {useState, Component} from 'react';
import {Text, StyleSheet, View, Image } from 'react-native'
import { Container, Header, Picker, TitleText,  LoginButton,  TextButton, Body,} from './styles';
import App from '../../../Containers/App';
import ReactDOM from 'react-dom';
import NavigationContainer from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default function Login() {
  const [pessoa, setPessoa] = useState(['Selecione um perfil', 'Gerson', 'Lucas', 'Mario'])
  const[pessoaSelect, setPessoaSelect] = useState([])

  return(
    <Container>
      <Header>
        <TitleText> Log</TitleText>
      </Header>
      
      <Body>
        <Picker
          selectedValue={pessoaSelect}
          onValueChange={ (itemValor) => setPessoaSelect(itemValor) }
          >
          {
            pessoa.map(cr =>{
              return <Picker.Item label={cr} value={cr} />
            })
          }
        </Picker>

        <LoginButton onPress={() => navigation.navigate('App')}>
          <TextButton> Login </TextButton>
        </LoginButton>
      </Body>
    </Container>
  );
}