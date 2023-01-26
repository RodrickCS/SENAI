import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Login({navigate}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const autenticar = () => {
    fetch("http://localhost:3000/entregadores/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          navigation.navigate("home", {
            id: data[0].id,
            nome: data[0].nome,
          });
        } else {
          alert("Usuário ou senha inválidos");
        }
      });

    return (
      <View>
        <Text>Login</Text>
        <TextInput
          value={email}
          onChangeText={(val) => {
            setEmail(val);
          }}
        />
        <TextInput
          value={password}
          onChangeText={(val) => {
            setPassword(val);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            autenticar();
          }}
        >
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  };
}
