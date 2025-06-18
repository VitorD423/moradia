import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import MoradiaScreen from './screens/MoradiaScreen';
import TrabalhoScreen from './screens/TrabalhoScreen';
import EducacaoScreen from './screens/EducacaoScreen';
import SaudeScreen from './screens/SaudeScreen';
import EmpregaoScreen from './screens/Emprego/EmpregaoScreen';
import VagasEstagioScreen from './screens/Emprego/VagasEstagioScreen';
import VagasAprendizScreen from './screens/Emprego/VagasAprendizScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Início"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Moradia" component={MoradiaScreen} />
        <Stack.Screen name="Trabalho" component={TrabalhoScreen} />
        <Stack.Screen name="Educação" component={EducacaoScreen} />
        <Stack.Screen name="Saúde" component={SaudeScreen} />
        <Stack.Screen name="Empregão" component={EmpregaoScreen} />
        <Stack.Screen name="Vagas de Estágio" component={VagasEstagioScreen} />
        <Stack.Screen name="Vagas de Jovem Aprendiz" component={VagasAprendizScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
