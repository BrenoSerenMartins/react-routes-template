import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const { Screen, Navigator } = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Navigator screenOptions={{}}>
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

export default DrawerRoutes;
