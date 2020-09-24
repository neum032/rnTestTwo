/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Menu from './components/Menu';

const Stack = createStackNavigator();

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>My App</Text>
    </View>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={() => {
              return (
                <>
                  <Header />
                  <View style={styles.main}>
                    <Text style={styles.text}>Hello World</Text>
                  </View>
                  <Menu style={styles.footer} />
                </>
              );
            }}
            options={{title: 'Welcome'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    margin: 8,
    fontSize: 18,
  },
  header: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  headerTitle: {
    textAlign: 'center',
    color: '#222',
    margin: 12,
    fontSize: 24,
  },
  main: {
    flex: 7,
    backgroundColor: 'white',
  },
  footer: {
    flex: 1,
  },
});

export default App;
