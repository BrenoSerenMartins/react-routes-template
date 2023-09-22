import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const { Screen, Navigator } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
      }}>
      <Screen
        name="login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Screen
        name="register"
        component={RegisterScreen}
        options={{
          title: 'Register',
        }}
      />
    </Navigator>
  );
};

export default StackRoutes;
