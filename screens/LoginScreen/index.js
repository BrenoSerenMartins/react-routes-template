import React from 'react';

import { View, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const login = () => {
    return navigation.navigate('register');
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center' }}>
      <Button title="Login" onPress={login} />
    </View>
  );
};

export default LoginScreen;
