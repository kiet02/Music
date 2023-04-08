import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Main/Home';
import { Provider } from 'react-redux';
import store from './store';
import Playtrack from './Main/Playtrack';
import Sreach from './Main/Sreach';
import Mini from './Main/Mini';
import Album from './Main/Album';





const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Album' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Play" component={Playtrack} />
        <Stack.Screen name="Sreach" component={Sreach}/>
        <Stack.Screen name="Album" component={Album}/>
      <Stack.Screen  name='Mini' component={Mini}/>

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}


