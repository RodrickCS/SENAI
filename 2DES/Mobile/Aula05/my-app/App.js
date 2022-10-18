import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Compromisso from './src/pages/compromissos/compromisso';
import Descricao from './src/pages/descricao/descricao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Compromisso" component={Compromisso} />
        <Stack.Screen name="Descricao" component={Descricao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}