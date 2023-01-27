import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";

export default function abertas({ navigation }) {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    setInterval(() => {
      listarTarefas();
    }, 1500);
  }, []);

  const listarTarefas = () => {
    fetch("http://localhost:3000/tarefas/readAberta")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTarefas(data);
      });
  };

  const finalizarTarefa = (id) => {
    fetch("http://localhost:3000/tarefas/finalizaTarefa/" + id, {
      method: "PUT",
    }).then((response) => {
      if (response.status === 200) {
        console.log("tarefa finalizada");

        listarTarefas();
      } else {
        console.log(response.status);
      }
    });
  };

  const cancelarTarefa = (id) => {
    fetch("http://localhost:3000/tarefas/cancelaTarefa/" + id, {
      method: "PUT",
    }).then((response) => {
      if (response.status === 200) {
        console.log("Tarefa cancelada");

        listarTarefas();
      } else {
        console.log(response.status);
      }
    });
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.text}>Tarefas abertas</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("canceladas");
          }}
          style={styles.button}
        >
          <Text style={styles.text}>ir para tarefas canceladas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("finalizadas");
          }}
          style={styles.button}
        >
          <Text style={styles.text}>ir para tarefas finalizadas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("criar");
          }}
          style={styles.button}
        >
          <Text style={styles.text}>Criar uma tarefa</Text>
        </TouchableOpacity>
      </View>

      {tarefas.map((tarefa, index) => {
        return (
          <View style={styles.align} key={index}>
            <ScrollView style={styles.card}>
              <Text style={styles.text}>id: {tarefa.id_tarefa}</Text>
              <Text style={styles.text}>Descricao: {tarefa.descricao}</Text>
              <Text style={styles.text}>Horario: {tarefa.horario_tarefa}</Text>
              <Text style={styles.text}>Status: {tarefa.status}</Text>
              <View style={styles.buttons}> 
                <TouchableOpacity
                  onPress={() => {
                    finalizarTarefa(tarefa.id_tarefa);
                  }}
                  style={styles.buttonCard}
                >
                  <Text style={styles.text}>Finalizar tarefa</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    cancelarTarefa(tarefa.id_tarefa);
                  }}
                  style={styles.buttonCard}
                >
                  <Text style={styles.text}>Cancelar tarefa</Text>
                </TouchableOpacity>
              </View>
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
    padding: "20px",
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
    flexDirection: 'row',
    marginTop: "10px",
  }
});
