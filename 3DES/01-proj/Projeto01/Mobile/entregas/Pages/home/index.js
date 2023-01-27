import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Home({ route }) {
    const [pedidos, setPedidos] = useState([]);
    const { id_entregador, nome } = route.params;
    

    useEffect(() => {
        listarPedidos();
    }, [])

    const listarPedidos = () => {
        fetch("http://localhost:3000/pedidos/readId/" + id_entregador)
        .then(response => {return response.json();})
        .then(data => {
            setPedidos(data);
        })
    }

    const finalizarPedido = (id_entregador) => {
        fetch("http://localhost:3000/pedidos/updateFim/" + id_entregador, {
            "method":"PUT"
        })
        .then(response => {
            if(response.status === 200) {
                console.log("PEDIDO FINALIZADO");
                listarPedidos();
            }else {
                console.log(response.status);
            }
        })
    }

    return(
        <View>
            <Text>Entregas com o</Text>
            <Text>Entregador : {nome} </Text>
            {
                pedidos.map((pedido, index) => {
                    return (
                        <View key={index}>
                            <Text>Cliente : {pedido.cliente}</Text>
                            <Text>Endereço : {pedido.endereco}</Text>
                            <Text>Produto : {pedido.produto}</Text>
                            <TouchableOpacity onPress={() => {
                                finalizarPedido(pedido.id_pedido);
                            }}>
                                <Text>Pedido Entregue</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </View>
    )
}