import React from 'react';
import { Keyboard, Alert} from 'react-native';
import { Container, Header, TitleText, Input, LoginButton, Register, TextRegister, TextButton, Body } from './styles';


export default function Registrar() {
  Keyboard.dismiss();
  
  const clique = () => {
    Alert.alert("Login, aqui, boa");
  };

  return (
    <>
      <Container>
        <Header>
          <TitleText> Registro </TitleText>
        </Header>
          
        <Body>
          <Input placeholder="Digite seu Nome" />
          <Input placeholder="Digite sua idade" />
          <Input secureTextEntry={true} placeholder="Digite sua senha" />
          <Input secureTextEntry={true} placeholder="Confirme sua senha" />

          <LoginButton onPress={ () => {clique()}}> 
            <TextButton > Salvar Dados </TextButton> 
          </LoginButton>

        </Body>
      </Container>
    </>
  );
}
