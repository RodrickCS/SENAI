import { View, Text, Button } from "react-native";

export default function Segunda({ navigation }) {
    return (
        <View>
            <Text>Segunda Tela</Text>
            <Button title="Navegar" onPress={() => { navigation.navigate('Home') }} />
        </View>
    )
}