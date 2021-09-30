import React, { useState, useEffect} from 'react';
import {Keyboard, Alert, AsyncStorage, TouchableOpacity} from 'react-native';
import { Container, Header, TitleText, Box, Tarefa, Input, Button, List, TextButton, Body, ContentBox, ContentItem, TaskTitle } from '../Components/styles';
import { Ionicons, MaterialIcons} from "@expo/vector-icons";


function App(){
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('')

  async function addTask() {
    if(newTask === "")
    { return; }
  
    const search = task.filter(task => task === newTask);
  
    if(search.length !== 0){
      Alert.alert("Tarefa Repetida!");
      return;
    }
    setTask([... task, newTask]);
    setNewTask('');
  
    Keyboard.dismiss();
  }

  // async function removeTask(item){
  //   Alert.alert("Deletar Task", "Tem certeza que deseja remover?",
  //   [
  //     {
  //       text: "Cancelar",
  //       onPress: () => { return;}, style: "cancel"
  //     },
  //     {
  //       text: "OK",
  //       onPress: () => setTask(task.filter(tasks => tasks !== item))
  //     }
  //   ], {cancelable: false})
  // }

  // useEffect(() => {
  //   async function carregaDados(){
  //     const task = await AsyncStorage.getItem("task");

  //     if(task){
  //       setTask(JSON.parse(task));
  //     }
  //   }
  //   carregaDados();
  // }, []);

  // useEffect(() => {
  //   async function salvaDados(){
  //     AsyncStorage.setItem("task", JSON.stringify(task));
  //   }
  //   salvaDados();
  // }, [task]);

  

  return(
      <>
      <Container>
        <Header>
          <TitleText> Aplicativo ToDoList </TitleText>
        </Header>

        <Box>
          <Tarefa>Adicione aqui uma Tarefa </Tarefa>
          
          <Input
            placeholderTextColor="#999"
            autoCorrect={true}
            placeholder="Tarefa"
            maxLength={30}
            onChangeText={text => setNewTask(text)}
            value={newTask}
            />
                    <Button onPress={() => addTask()}>
                        <TextButton> Adicionar Tarefa </TextButton>
                    </Button>
                
      </Box>
        
            
      </Container>
    </>
    
  )
}



//export default App;