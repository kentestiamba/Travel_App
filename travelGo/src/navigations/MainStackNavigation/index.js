import { createStackNavigator } from '@react-navigation/stack';

import DashBoardScreen from '../../screens/MainScreens/DashBoardScreen';

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />
      {/* Add more screens if needed */}
    </Stack.Navigator>
  );
};

export default MainStackNavigation;