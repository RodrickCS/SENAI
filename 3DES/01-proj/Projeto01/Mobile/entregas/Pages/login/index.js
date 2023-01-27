import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("jair@gmail.com");
    const [senha, setSenha] = useState("senha123");

    const autenticar = () => {
        fetch("http://localhost:3000/entregadores/login", {
            "method":"POST",
            "headers":{
                "Content-Type": "application/json"
            },
            "body":JSON.stringify({
                "email":email,
                "senha":senha
            })
        })
        .then(response => {return response.json(); })
        .then(data => {
            if(data.length > 0) {
                
                navigation.navigate("Home", {
                    "id_entregador":data[0].id_entregador,
                    "nome":data[0].nome
                })
            }else {
                console.log("Entregador não encontrado")
            }
        })

    }

    return(
        <View>
            <Text>LOGIN</Text>
            <TextInput value={email} onChangeText={(val) => { setEmail(val); }} />
            <TextInput value={senha} onChangeText={(val) => { setSenha(val); }} />
            <TouchableOpacity onPress={() => { autenticar(); }}>
                <Text>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}