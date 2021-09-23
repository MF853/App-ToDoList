import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Platform, Keyboard, Alert } from 'react-native';
import { Ionicons, MaterialIcons} from "@expo/vector-icons";

export default function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('')
  let cont = 0;
  let cont2 = cont;
  // let contador = 1;
  async function addTask() {
    setTask([... task, newTask]);
    setNewTask('');

    Keyboard.dismiss();
  }

  function contador(){
    cont  = cont + 1 ;
    cont2 = cont;
    return cont2;
  }

  // useEffect(() => {
  //   console.log(newTask);
  // }, [newTask])

  return (
    <>
      <View style={styles.container}>
        <View style={styles.Title}>
            <Text style={styles.TitleTxt} > Aplicativo ToDoList</Text>
        </View>

        <View style={styles.Form}>
          <Text style={styles.TarefaTxt}>Adicione aqui uma Tarefa</Text>
          <TextInput
            style={styles.Input}
            placeholderTextColor="#999"
            autoCorrect={true}
            placeholder="Tarefa"
            maxLength={25}
            onChangeText={text => setNewTask(text)}
            value={newTask}
          />
          <TouchableOpacity style={styles.Button} onPress={ () => addTask()}>
            {/* <ion-icons name="ios-add" size="25" color="#f675" /> */}
            <Text style={styles.btnText}> Adicionar Tarefa</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Body}>
          <FlatList
            style={styles.FlatList} data={task}
            keyExtractor={item => item.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={ ({ item }) => (
              <View style={styles.ContainerView}>
                <View style={styles.ContainerView2}>
                  <TouchableOpacity >
                    <MaterialIcons name="storage" size={32} color="black" />
                  </TouchableOpacity>
                    <Text style={styles.TitleTxt2}> Tarefa #{1} </Text>
                  <TouchableOpacity >
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
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
  },

  Title: {
    color: "#000",
    backgroundColor: "#fff",
    width: 315,
    height: 173,
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 40,
    marginTop: -50
  },

  TitleTxt: {
    marginTop: 80,
    fontSize: 24,
    fontFamily: 'Roboto'
  },

  TitleTxt2: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: 'bold'

  },

  TarefaTxt: {
    marginTop: 18,
    alignSelf: "center",
    fontSize: 24,
    fontFamily: 'Roboto',
    height: 50,
  },

  btnText: {
    color: "#FFFFFF",
    fontSize: 18,
  },

  Body: {
    flex: 1
  },

  Form: {
    // flex: 1,
    width: 315,
    height: 206,
    marginTop: 39,
    borderRadius: 20,
    // padding: 0,
    // height: 60,
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    // flexDirection: 'row',
    // paddingTop: 13,
    // borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff"
  },

  Input: {
    // flex: 1,
    marginTop: -10,
    width: 272,
    height: 59,
    backgroundColor: "#E5E5E5",
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    // borderWidth: 0,
    // borderColor: "#eee"
  },

  Button: {
    height: 38,
    width: 271,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#6200EE",
    borderRadius: 4,
    marginTop: 25
  },

  FlatList: {
    flex: 1,
    marginTop: 5,

  },

  ContainerView: {
    width: 315,
    height: 136,
    marginTop: 25,
    // marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: "#eee",

    // display: 'flex',
    // justifyContent: 'space-between',
    alignSelf: 'center',
    // flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 20

  },

  ContainerView2: {
    display: 'flex',
    justifyContent: 'space-between',

    flexDirection: 'row',
  },

  txtTask: {
    fontSize: 14,
  }
});
