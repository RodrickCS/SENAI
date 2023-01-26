import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function Cozinha() {
  const [pedido, setPedido] = useState();

  const enviarPedido = (id_pedido) => {
    fetch("http://localhost:3000/pedidos/updateEn/" + id_pedido, {
      method: "PUT",
    }).then((response) => {
      if (response.status === 200) {
        console.log("enviado com sucesso");
      } else {
        console.log(response);
      }
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/pedidos/readCozinha")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        Object.entries(data).forEach((entry) => {
          const [chave, value] = entry;
          setPedido(value);
        });
      });
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Cozinha</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Em execução</Text>
        <View style={styles.pedidos}>
          {pedido !== undefined ? (
            <View>
              <Text>{pedido.id_pedido}</Text>
              <Text>{pedido.cliente}</Text>
              <Text>{pedido.endereco}</Text>
              <Text>{pedido.produto}</Text>
              <Text>{pedido.data}</Text>
              <Text>{pedido.hora_pedido}</Text>
              <TouchableOpacity
                onPress={() => {
                  enviarPedido(pedido.id_pedido);
                }}
              >
                <Text>Enviar Entrega</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text>Nenhum pedido encontrado</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    width: "100%",
    height: "100%",
  },

  text: {
    fontSize: 20,
  },

  header: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 70,
    border: "1px solid black",
    fontSize: 20,
    backgroundColor: "#fff",
  },
  body: {
    display: "flex",
    flexDirection: "columns",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#ddd",
    height: "100%",
  },
  pedidos: {
    margin: 20,
    display: "flex",
    flexDirection: "columns",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "90%",
    border: "1px solid black",
    fontSize: 20,
    backgroundColor: "#fff",
  },
});
