import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Playground from './components/playground/Playground';
import PizzaTranslator from './components/playground/PizzaTranslator';
import Touchables from './components/playground/Touchables';
import Scroll from './components/playground/Scroll';
import FlatListBasics from './components/playground/FlatListBasics';
import SectionListBasics from './components/playground/SectionListBasics';
import Movies from './components/playground/Movies';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <PizzaTranslator />
            </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
