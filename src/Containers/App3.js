import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Platform, Keyboard, Alert,  AsyncStorage} from 'react-native';
import { Ionicons, MaterialIcons} from "@expo/vector-icons";
//import{Container, Body, Title, TitleText, TitleText2, Tarefa, btnText, Form, Input, Btn, FlatL, ContainerItem, txtTask } from './styles'
import { Container, Header, TitleText, Box, Tarefa, Input, Button, TextButton, Body, List, ContentBox, ContentItem, TaskTitle } from './styles';
//import {ExternalStyleSheetfrom} from './styles';


export default function App() {
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
  async function removeTask(item){
    Alert.alert("Deletar Task", "Tem certeza que deseja remover?",
    [
      {
        text: "Cancelar",
        onPress: () => { return;}, style: "cancel"
      },
      {
        text: "OK",
        onPress: () => setTask(task.filter(tasks => tasks !== item))
      }
    ], {cancelable: false})
  }

  useEffect(() => {
    async function carregaDados(){
      const task = await AsyncStorage.getItem("task");

      if(task){ 
        setTask(JSON.parse(task)); 
      }
    }
    carregaDados();
  }, []);

  useEffect(() => {
    async function salvaDados(){ 
      AsyncStorage.setItem("task", JSON.stringify(task));
    }

    salvaDados();
  }, [task]);

  return (
    <>
    <View style={styles.Container}>
        <View style={styles.Title}>
            <Text style={styles.TitleText} > Aplicativo ToDoList </Text>
        </View>

        <View style={styles.Form}>
          <Text style={styles.Tarefa}>Adicione aqui uma Tarefa </Text>
          <TextInput
            style={styles.Input}
            placeholderTextColor="#999"
            autoCorrect={true}
            placeholder="Tarefa"
            maxLength={30}
            onChangeText={text => setNewTask(text)}
            value={newTask}
          />
          <TouchableOpacity style={styles.Button} onPress={() => addTask()}>
            <Text style={styles.btnText}> Adicionar Tarefa </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Body}>
          <FlatList
            style={styles.FlatList} data={task}
            keyExtractor={item => item.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={ ({ item }) => (
              <View style={styles.ContainerView}>
                <View style={styles.ContainerItem}>
                  <TouchableOpacity >
                    <MaterialIcons name="storage" size={32} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.TitleText2}> Tarefa </Text>
                  <TouchableOpacity onPress={() => removeTask(item)}>
                    <MaterialIcons name="close" size={32} color="#f64c75" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.txtTask}> {item} </Text>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({ 
  Body: {
    flex: 1,
    fontFamily: 'Roboto',
    fontWeight: 'normal'
  },

  Container: {
    flex: 1,
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#E5E5E5',
  },

  Title: {
    width: 315,
    height: 173,
    color: "#000",
    marginTop: -50,
    borderRadius: 40,
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#fff",
  },

  TitleText: {
    fontSize: 24,
    marginTop: 80,
  },

  TitleText2: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  Tarefa: {
    height: 50,
    fontSize: 24,
    marginTop: 18,
    alignSelf: "center",
  },

  btnText: {
    fontSize: 18,
    color: "#FFFFFF",
  },

  Form: {
    width: 315,
    height: 206,
    marginTop: 39,
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    borderColor: "#eee",
    backgroundColor: "#fff"
  },

  Input: {
    marginTop: -10,
    width: 272,
    height: 59,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#E5E5E5"
  },

  Button: {
    width: 271,
    height: 38,
    marginTop: 25,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#6200EE",
  },

  FlatList: {
    flex: 1,
    marginTop: 5,
  },

  ContainerView: {
    width: 315,
    height: 136,
    padding: 15,
    marginTop: 25,
    borderWidth: 1,
    borderRadius: 4,
    borderRadius: 20,
    borderColor: '#eee',
    alignSelf: 'center',
    backgroundColor: "#eee",
  },

  ContainerItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  txtTask: {
    fontSize: 14,
    marginTop: 30,
    color: '#757575',
  }
});
