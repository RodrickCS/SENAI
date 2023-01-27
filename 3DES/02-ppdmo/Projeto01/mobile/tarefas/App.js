import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import canceladas from './pages/canceladas';
import abertas from './pages/abertas';
import finalizadas from './pages/finalizadas';
import criar from './pages/criar';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="abertas" component={abertas} />
        <Stack.Screen name="finalizadas" component={finalizadas} />
        <Stack.Screen name="canceladas" component={canceladas} />
        <Stack.Screen name="criar" component={criar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
