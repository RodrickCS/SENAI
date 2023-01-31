import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      listarPedidos();
    }, 1500);
  }, []);

  const listarPedidos = () => {
    fetch("http://localhost:3000/pedidos/readCozinha")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPedidos(data);
      });
  };

  const enviarPedido = (id_pedido) => {
    fetch("http://localhost:3000/pedidos/updateEn/" + id_pedido, {
      method: "PUT",
    }).then((response) => {
      if (response.status === 200) {
        listarPedidos();
      } else {
        console.log(response.status);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Cozinha</Text>
        <Text>Em Execução</Text>
      </View>
      <ScrollView style={styles.scroll}>
        {pedidos.map((pedido, index) => {
          const date = pedido.data.split("T")[0];
          return (
            <View style={styles.card} key={index}>
              <Text>id : {pedido.id_pedido}</Text>
              <Text>Cliente : {pedido.cliente}</Text>
              <Text>Produto : {pedido.produto}</Text>
              <Text>Endereço : {pedido.endereco}</Text>
              <Text>Data : {date}</Text>
              <Text>Horario : {pedido.hora_pedido}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  enviarPedido(pedido.id_pedido);
                }}
              >
                <Text>Enviar Entrega</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ddd",
  },

  header: {
    height: "10%",
    width: "90%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
  },
  text: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    width: "70%",
    display: "flex",
    justifyContent: "center",
  },
  scroll: {
    width: "70%",
    height: "100%",
    backgroundColor: "#ddd",
    display: "flex",
    marginTop: "8%",
  },
  card: {
    width: "250px",
    height: "230px",
    backgroundColor: "white",
    border: "1px solid black",
    marginBottom: "20px",
    padding: "20px",
  },
  button: {
    width: "200px",
    height: "30px",
    backgroundColor: "#33D6C5",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
  },
});
