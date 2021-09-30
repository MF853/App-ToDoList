//import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import {  Text, TouchableOpacity, FlatList, Platform, Keyboard, Alert, SafeAreaView, AsyncStorage} from 'react-native';

// const styles = StyleSheet.create({
//     Body: {
//             flex: 1,
//             fontFamily: 'Roboto',
//             fontWeight: 'normal'
//           },
        
//           Container: {
//             flex: 1,
//             marginTop: 20,
//             paddingVertical: 20,
//             paddingHorizontal: 20,
//             backgroundColor: '#E5E5E5',
//           },
        
//           Title: {
//             width: 315,
//             height: 173,
//             color: "#000",
//             marginTop: -50,
//             borderRadius: 40,
//             alignSelf: "center",
//             alignItems: "center",
//             alignContent: "center",
//             backgroundColor: "#fff",
//           },
        
//           TitleText: {
//             fontSize: 24,
//             marginTop: 80,
//           },
        
//           TitleText2: {
//             fontSize: 24,
//             fontWeight: 'bold'
//           },
        
//           Tarefa: {
//             height: 50,
//             fontSize: 24,
//             marginTop: 18,
//             alignSelf: "center",
//           },
        
//           btnText: {
//             fontSize: 18,
//             color: "#FFFFFF",
//           },
        
//           Form: {
//             width: 315,
//             height: 206,
//             marginTop: 39,
//             borderRadius: 20,
//             alignSelf: "center",
//             alignItems: "center",
//             alignContent: "center",
//             borderColor: "#eee",
//             backgroundColor: "#fff"
//           },
        
//           Input: {
//             marginTop: -10,
//             width: 272,
//             height: 59,
//             borderRadius: 4,
//             paddingVertical: 5,
//             paddingHorizontal: 10,
//             backgroundColor: "#E5E5E5"
//           },
        
//           Button: {
//             width: 271,
//             height: 38,
//             marginTop: 25,
//             borderRadius: 4,
//             alignItems: 'center',
//             justifyContent: 'center',
//             backgroundColor: "#6200EE",
//           },
        
//           FlatList: {
//             flex: 1,
//             marginTop: 5,
//           },
        
//           ContainerView: {
//             width: 315,
//             height: 136,
//             padding: 15,
//             marginTop: 25,
//             borderWidth: 1,
//             borderRadius: 4,
//             borderRadius: 20,
//             borderColor: '#eee',
//             alignSelf: 'center',
//             backgroundColor: "#eee",
//           },
        
//           ContainerItem: {
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//           },
        
//           txtTask: {
//             fontSize: 14,
//             marginTop: 30,
//             color: '#757575',
//           }
// });

export const Container = styled.View`
flex: 1;

backgroundColor: #E5E5E5;
align-items: center;

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
margin-top: -10;
    width: 272;
    height: 59;
    border-radius: 4;
    padding: 5px 10px;
    background: #E5E5E5;
`

  export const Button = styled.TouchableOpacity`
  width: 271;
  height: 38;
  margin-top: 25;
  border-radius: 4;
  align-items: center;
  justify-content: center;
  background: #6200EE;
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
