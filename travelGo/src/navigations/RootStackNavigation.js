import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingStackNavigation from './LandingStackNavigation';
import MainStackNavigation from './MainStackNavigation';

const Stack = createStackNavigator();

const RootStackNavigation = () => {
	const user = null; // Replace this with your user authentication logic

	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="false" initialRouteName={user ? 'LandingStackNavigation' : 'None'}>
				{user ? (
					<Stack.Screen name="LandingStackNavigation" component={LandingStackNavigation} />
				) : null}
				<Stack.Screen name="MainStackNavigation" component={MainStackNavigation} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootStackNavigation;
