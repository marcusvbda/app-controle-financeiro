import {NavigationContainer} from '@react-navigation/native';
import { Home, Profile } from './src/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserContextProvider } from './src/contexts/UserContext';
const Stack = createNativeStackNavigator();

export default function App() {
  const initialRoute = "Home";
  
  return (
    <UserContextProvider>
      <NavigationContainer >
        <Stack.Navigator 
          initialRouteName={initialRoute}
          screenOptions={{headerShown: false,gestureEnabled: false}}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}