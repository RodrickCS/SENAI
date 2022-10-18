import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';


export default function Home({route}) {
  let cod = route.params.cod

  const { nome, setNome } = useState("")
  const { cargo, setCargo } = useState("")
  const { lista, setLista } = useState({
    "nome": "Fulano",
    "cargo": "Beltrano"
  },
    {
      "nome": "Beltrano",
      "cargo": "Analista"
    })
  const cadastrar = () => {
    let novoFunc = {
      "nome":nome,
      "cargo":cargo
    }
    setLista([...lista, novoFunc])
  }

  return (
    <View style={styles.container}>
      <Text>{cod}</Text>
      <TextInput placeholder='Nome do Funcionario' onChangeText={(val) => { setNome(val) }} />
      <TextInput placeholder='Cargo do Funcionario' onChangeText={(val) => { setCargo(val) }} />
      <Button title='Cadastrar Funcionario' onPress={() => { cadastrar() }} />
      <ScrollView>
        {
          lista.map(funcionario => {
            return (
              <View  key={indiice}>
                <Text>{funcionario.nome}</Text>
                <Text>{funcionario.cargo}</Text>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
