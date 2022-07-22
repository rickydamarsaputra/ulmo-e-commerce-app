import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login';
import Register from './screens/register';
import CustomerMain from './screens/customers/main';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />

				<Stack.Screen name="CustomerMain" component={CustomerMain} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
