/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactList from 'screens/contact-list';
import ContactDetail from 'screens/contact-detail';
import { RootStackParamList } from 'utils/types';
import store from 'redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ContactList" component={ContactList} options={{
            headerTitle: 'Contacts',
          }} />
          <Stack.Screen name="ContactDetail" component={ContactDetail} options={{
            headerTitle: '',
            headerBackTitle: 'Contacts'
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
    ;
}

export default App;
