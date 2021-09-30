import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { Text, TouchableOpacity, FlatList, Platform, Keyboard, Alert, SafeAreaView, AsyncStorage} from 'react-native';
//import FacebookIcon from '@material-ui/icons/Facebook';
//import GoogleLogin from 'react-google-login';
import { Container, Header, TitleText, Box, Tarefa, Input, LoginButton, Register, TextRegister, List, TextButton, Body, ContentBox, ContentItem, TaskTitle, TextTask } from './stylesLogin';
import Registrar from '../Register/index';

export default function Login() {
  Keyboard.dismiss();
  //const [user, setUser] = useState();

  

  const clique = () => {
    <Registrar />
  };
  
//   const responseGoogle = () => {
//     const { profileObj: {name}} = response;
//     setUser = name;
//   }

    return (
        <>
        
        <Container>
            <Header>
                <TitleText> Log</TitleText>
            </Header>


            <Body>
                {/* <GoogleLogin 
                clientId=""
                buttonText="Continuar com o Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                /> */}

              <Input placeholder="Digite seu email" />
              <Input secureTextEntry={true} placeholder="Digite sua senha" />

              <LoginButton onPress={ () => {clique()}}> 
                <TextButton > Login </TextButton> 
              </LoginButton>
              <Register > 
                <TextRegister> Registrar </TextRegister> 
              </Register>
              
            </Body>
            
  
        </Container>
        </>

    );
}
