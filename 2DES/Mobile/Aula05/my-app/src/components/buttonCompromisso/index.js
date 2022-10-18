import { TouchableOpacity } from "react-native";

import styles from './style'

export default function ButtonCompromisso(props) {
    const { onPress, value, horario } = props

    return (
        <TouchableOpacity style={styles.button} onPress={() => { onPress }}>
            <Text style={styles.text}>{value}</Text>
            <Text style={styles.text}>{horario}</Text>
        </TouchableOpacity>
    )
}