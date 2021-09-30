import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { Text, TouchableOpacity, FlatList, Platform, Keyboard, Alert, SafeAreaView, AsyncStorage} from 'react-native';
//import FacebookIcon from '@material-ui/icons/Facebook';
//import GoogleLogin from 'react-google-login';
import { Container, Header, TitleText, Box, Tarefa, Input, LoginButton, Register, TextRegister, List, TextButton, Body, ContentBox, ContentItem, TaskTitle, TextTask } from './styles';


export default function Registrar() {
  Keyboard.dismiss();
  //const [user, setUser] = useState();

      //{
      // id: 1, 
      // name: Pedro,
      // senha: 96352737 }
  
   

  const clique = () => {
    Alert.alert("Login, aqui, boa");
  };

  
//   const responseGoogle = () => {
//     const { profileObj: {name}} = response;
//     setUser = name;
//   }

    return (
        <>
        
        <Container>
            <Header>
                <TitleText> Salvou</TitleText>
            </Header>


            <Body>
                {/* <GoogleLogin 
                clientId=""
                buttonText="Continuar com o Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                /> */}

              <Input placeholder="Digite seu Nome" />
              <Input placeholder="Digite sua idade" />
              <Input secureTextEntry={true} placeholder="Digite sua senha" />
              <Input secureTextEntry={true} placeholder="Confirme sua senha" />

              <LoginButton onPress={ () => {clique()}}> 
                <TextButton > Login </TextButton> 
              </LoginButton>
              <Register mode="contained"> 
                <TextRegister> Registrar </TextRegister> 
              </Register>
              
            </Body>
            
  
        </Container>
        </>

    );
}
