import { createStackNavigator } from '@react-navigation/stack';

import DashBoardScreen from '../../screens/MainScreens/DashBoardScreen';
import OnBoardingScreen from '../../screens/LandingScreens/OnBoardingScreen';

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      {/* <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} /> */}
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      {/* Add more screens if needed */}
    </Stack.Navigator>
  );
};

export default MainStackNavigation;