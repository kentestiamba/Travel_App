import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from '../../screens/LandingScreens/OnBoardingScreen';

const Stack = createStackNavigator();

const LandingStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Set this to false to hide the header for all screens
      }}
    >
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      {/* Add more screens if needed */}
    </Stack.Navigator>
  );
};

export default LandingStackNavigation;
