import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Home() {
    return (
        <Drawer.Navigator initialRouteName='Main'
            screenOptions={{
                drawerType: 'back',
                swipeEdgeWidth: 200
            }}>
                <Drawer.Screen name='Main'
                    component={MainScreen}
                    options={{
                        headerShown: false
                    }} />
        </Drawer.Navigator>
    )
}
export default function Navigations() {
    return (
        <Stack.Navigator initialRouteName='Home'>
             <Stack.Screen 
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}/>

        </Stack.Navigator>
    )
}