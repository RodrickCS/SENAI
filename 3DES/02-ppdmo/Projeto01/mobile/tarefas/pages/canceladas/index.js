import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
export default function canceladas({ route, navigation }) {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    listarTarefas();
  }, []);

  const listarTarefas = () => {
    fetch("http://localhost:3000/tarefas/readCancelado")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTarefas(data);
      });
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.text}>Tarefas Canceladas</Text>
      </View>
      {tarefas.map((tarefa, index) => {
        return (
          <View style={styles.align} key={index}>
            <ScrollView style={styles.card}>
              <Text style={styles.text} >id: {tarefa.id_tarefa}</Text>
              <Text style={styles.text} >Descricao: {tarefa.descricao}</Text>
              <Text style={styles.text} >Horario: {tarefa.horario_tarefa}</Text>
              <Text style={styles.text} >Horario cancelado: {tarefa.horario_encerramento}</Text>
              <Text style={styles.text} >Status: {tarefa.status}</Text>
            </ScrollView>
          </View>
        );
      })}
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
    border: "1px solid black",
    height: "200px",
    width: "350px",
    marginTop: "20px",
    padding: "20px",

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
});
