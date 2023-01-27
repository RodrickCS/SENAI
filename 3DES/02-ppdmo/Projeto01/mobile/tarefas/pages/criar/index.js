import { Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native";
import { useEffect, useState } from "react";

export default function criar({ navigation }) {
  const [tarefa, setTarefa] = useState("");

  function criarTarefa() {
    fetch("http://localhost:3000/tarefas/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        descricao: tarefa,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
      navigation.navigate("abertas");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Criar</Text>
      <TextInput style={styles.input} value={tarefa} onChangeText={(val) => { setTarefa(val); }} />
      <TouchableOpacity onPress={() => criarTarefa()}>
        <Text style={styles.text}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    height: "50px",
    backgroundColor: "white",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    height: "200px",
    width: "350px",
    marginTop: "20px",
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    display: "flex",
    alignItems: "center",
    border: "1px solid black",
    width: "250px",
  },
  buttonCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    width: "150px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
  },
  align: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    marginTop: "10px",
  },
  input: {
    border: "1px solid black",

  }
});