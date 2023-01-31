import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("jair@gmail.com");
  const [senha, setSenha] = useState("senha123");

  const autenticar = () => {
    fetch("http://localhost:3000/entregadores/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        senha: senha,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          navigation.navigate("Home", {
            id_entregador: data[0].id_entregador,
            nome: data[0].nome,
          });
        } else {
          console.log("Entregador não encontrado");
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
        style={styles.input}
        
          value={email}
          onChangeText={(val) => {
            setEmail(val);
          }}
        />
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={(val) => {
            setSenha(val);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            autenticar();
          }}
        >
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: "100px",
    height: "200px",
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
  input: {
    border: "1px solid black",
    borderRadius: 6,
    margin: "17px",
  },
});
