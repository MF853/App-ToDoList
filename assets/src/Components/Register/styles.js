//import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import {  Text, TouchableOpacity, FlatList, Platform, Keyboard, Alert, SafeAreaView, AsyncStorage} from 'react-native';


export const Container = styled.View`
flex: 1;

backgroundColor: #E5E5E5;
align-items: center;
justify-content: center;
`;
//margin-top: 20px;
//padding: 0px 20px;

export const Header = styled.View`

    width: 85%;
    height: 173px;
    margin-top: -50px;
    border-radius: 40px;
    align-items: center;    
    background: #FFFFFF;
`;
// align-self: center;
// align-content: center;



// export const title = styled.View`
// width: 315px;
// height: 173px;
// // marginTop: -50px;
// borderRadius: 40px;
// alignSelf: "center";
// alignItems: "center";
// alignContent: "center";
// //backgroundColor: "#fFcfff";
// `
// export const Tile = styled.Text`
// width: 315;
//     height: 173;
//     color: "#000";
//     marginTop: -50;
//     borderRadius: 40;
//     alignSelf: "center";
//     alignItems: "center";
//     alignContent: "center";
//     backgroundColor: "#fff";
// `;

export const TitleText = styled.Text`
    font-size: 24;
    margin-top: 100px;
`;

export const Box = styled.View`
width: 315;
height: 206;
margin-top: 40;
border-radius: 20;
align-self: center;
align-items: center;
align-content: center;
border-color: #eee;
background: #fff;
`



export const Tarefa = styled.Text`
    height: 50;
    font-size: 24;
    margin-top: 18;
    align-self: center;
`

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

export const List = styled.FlatList`
    flex: 1;
    margin-top: 5;
`

export const Body = styled.View`
    flex: 1;
    font-family: Roboto;
    font-weight: normal;
    margin-top: 70;
    
`;



  export const ContentBox = styled.View`
  width: 315px;
  height: 122px;
  padding: 15px;
  margin-top: 25px;
  border-width: 1px;
  border-radius: 4px;
  border-radius: 20px;
  border-color: #eee;
  
  background: #eee;
`



  export const ContentItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`

export const TaskTitle = styled.Text`
    font-size: 24;
    font-weight: bold;
`

  export const TextTask = styled.Text`
    font-size: 14;
    padding-top: 20;
    color: #757575;
`

// export const textSpace = styled.View`
//     margin-top: 30;
//     color: #757575;
// `
