import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ViewllView } from "react-native";
import { TouchableOpacity } from "react-native-web";

export default function Home({ route }) {
  const [pedidos, setPedidos] = useState([]);
  const { id_entregador, nome } = route.params;

  useEffect(() => {
    listarPedidos();
  }, []);

  const listarPedidos = () => {
    fetch("http://localhost:3000/pedidos/readId/" + id_entregador)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPedidos(data);
      });
  };

  const finalizarPedido = (id_entregador) => {
    fetch("http://localhost:3000/pedidos/updateFim/" + id_entregador, {
      method: "PUT",
    }).then((response) => {
      if (response.status === 200) {
        console.log("PEDIDO FINALIZADO");
        listarPedidos();
      } else {
        console.log(response.status);
      }
    });
  };

  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Text>Entregas do {nome} </Text>
      </View>
      {pedidos.map((pedido, index) => {
        return (
          <View style={styles.card} key={index}>
            <Text>Cliente : {pedido.cliente}</Text>
            <Text>Endereço : {pedido.endereco}</Text>
            <Text>Produto : {pedido.produto}</Text>
            <TouchableOpacity
              onPress={() => {
                finalizarPedido(pedido.id_pedido);
              }}
            >
              <Text>Pedido Entregue</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ddd",
    width: "100%",
    height: "100%",
    display: "flex",
  },

  header: {
    
    height: "70px",
    width: "100%",
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
  Viewll: {
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
  input: {
    border: "1px solid black",
    borderRadius: 6,
    margin: "17px",
  },
});
