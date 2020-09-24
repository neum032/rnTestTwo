/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {View, StyleSheet, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';

const icons = ['dashboard', 'notes', 'message', 'cloud', 'person'];

const Menu = () => {
  return (
    <View style={styles.wrapper}>
      {icons.map((iconName) => {
        return (
          <Icon
            key={iconName}
            name={iconName}
            containerStyle={styles.iconContainer}
            size={Dimensions.get('window').width / 5 - marginBase * 5}
            color="#0068A9"
            underlayColor="white"
            onPress={() => console.log('pressed')}
          />
        );
      })}
    </View>
  );
};

const marginBase = 7;

const styles = StyleSheet.create({
  wrapper: {
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
  },
  iconContainer: {
    //backgroundColor: "yellow",
    width: Dimensions.get('window').width / icons.length - (marginBase * 2 + 1),
    alignItems: 'center',
    marginTop: marginBase * 2,
    margin: marginBase,
  },
});

export default Menu;
