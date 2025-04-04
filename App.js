import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import AddPieceScreen from './src/screens/AgregarScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Mis Piezas" component={HomeScreen} />
                <Stack.Screen name="Agregar" component={AddPieceScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
