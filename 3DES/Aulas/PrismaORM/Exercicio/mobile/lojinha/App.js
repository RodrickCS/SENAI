import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [produtos, setProdutos] = useState([]);

  const [nomeProd, setNomeProd] = useState("");
  const [valorProd, setValorProd] = useState("");
  const [setorProd, setSetorProd] = useState("");

  useEffect(() => {
    setInterval(() => {
      listarProdutos();
    }, 1500);
  }, []);

  const listarProdutos = () => {
    fetch("http://localhost:3000/produtos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProdutos(data);
      });
  };

  function cadastrarProd() {
    fetch("http://localhost:3000/produtosCreate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nomeProd,
        valor: Number(valorProd),
        setor_id: Number(setorProd)
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <View>
      <Text>Produtos</Text>
      <TextInput
        placeholder="nome"
        value={nomeProd}
        onChangeText={(val) => {
          setNomeProd(val);
        }}
      />
      <TextInput
        placeholder="valor"
        value={valorProd}
        onChangeText={(val) => {
          setValorProd(val);
        }}
      />
      <TextInput
        placeholder="setor"
        value={setorProd}
        onChangeText={(val) => {
          setSetorProd(val);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          cadastrarProd();
        }}
      >
        <Text>Criar Produto</Text>
      </TouchableOpacity>
      {produtos.map((prod, index) => {
        return (
          <View key={index}>
            <View style={{ margin: "20px" }}>
              <Text>id Produto: {prod.id_prod}</Text>
              <Text>Nome: {prod.nome}</Text>
              <Text>Valor: {prod.valor}</Text>
              <Text>Setor Responsável: {prod.setor_id}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
