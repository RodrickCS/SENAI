import { TouchableOpacity, View, ScrollView } from 'react-native'
import styles from './style'
import ButtonCompromisso from '../../components/buttonCompromisso'

export default function Compromisso({ navigation }) {

    const data = [
        {
            "id": 1,
            "tipo": 2,
            "img":"C:/Users/Desenvolvimento/Desktop/Aula05Mobile/my-app/src/assets/escola.png",
            "nome": "Escola",
            "horario": "07:30 - 11:30"
        },
        {
            "id": 2,
            "tipo": 1,
            "img":"C:/Users/Desenvolvimento/Desktop/Aula05Mobile/my-app/src/assets/medico.png",
            "nome": "Consulta Médica",
            "horario": "13:00 - 13:40"
        },
        {
            "id": 3,
            "tipo": 3,
            "img":"C:/Users/Desenvolvimento/Desktop/Aula05Mobile/my-app/src/assets/mercado.png",
            "nome": "Ir ao mercado",
            "horario": "16:30 - 17:00"
        },
        {
            "id": 4,
            "tipo": 4,
            "img":"C:/Users/Desenvolvimento/Desktop/Aula05Mobile/my-app/src/assets/cinema.png",
            "nome": "Ir ao cinema",
            "horario": "20:00 - 22:30"
        },
    ]


    return (
        data.map((item) => {
            return (
                <ScrollView>
                    <ButtonCompromisso value={item.nome} horario={item.horario} onPress={navigation.navigate("Descricao", { "info": item.id })} />
                </ScrollView>
            )
        })


    )
}