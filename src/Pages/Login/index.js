import React, {useState, Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native'
import { Container, Header, Picker, TitleText, Input, LoginButton, Register, TextRegister, TextButton, Body,} from './styles';


export default function Login({navigation}) {
  const [pessoa, setPessoa] = useState(['Selecione um perfil', 'Gerson', 'Lucas', 'Mario'])
  const[pessoaSelect, setPessoaSelect] = useState([])

  return(
    <Container>
      <Header>
        <TitleText> Aplicativo ToDoList </TitleText>
      </Header>
      
      <Body>
        {/* <Picker
          selectedValue={pessoaSelect}
          onValueChange={ (itemValor) => setPessoaSelect(itemValor) }
          >
          {
            pessoa.map(cr =>{
              return <Picker.Item label={cr} value={cr} />
            })
          }
        </Picker> */}

        

        <LoginButton onPress={() => navigation.navigate('App')}>
          <TextButton> Login </TextButton>
        </LoginButton>
      
          <Register> 
            <TextRegister onPress={() => navigation.navigate('Registrar')}> Registrar </TextRegister> 
          </Register>
      
      </Body>
    </Container>
  );
}
