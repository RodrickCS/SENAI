import { TextInput, View } from "react-native";
import ButtonLogin from '../../components/ButtonLogin'
import styles from "./style";

export default function Login({ navigation }) {
    const func = () => {
        navigation.navigate("Home") 
    }
    return(
        <View style={styles.container}>
            <TextInput value="Email" style={styles.input}/>
            <TextInput value="Senha" style={styles.input}/>
            <ButtonLogin value="Login" onPress={func}/>
        </View>
    )
}