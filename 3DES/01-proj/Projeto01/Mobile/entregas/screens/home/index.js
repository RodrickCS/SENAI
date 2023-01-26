import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Home({ route }) {
  const [pedidos, setPedidos] = useState([]);

  const [id, nome] = route.params;

  useEffect(() => {
    fetch(`http://localhost:3000/pedidos/readPorEntregador/${id}`)
    .then(response => {return response.json()})
    .then(data => {
      setPedidos(data);
    })

  }, []);
  return (
    <View>
      <Text>Home</Text>
      <Text>Entregador: {nome}</Text>
    </View>
  );
}
