import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
import Blink from './Blink';
import Greeting from './Greeting';

export default class Playground extends React.Component {
    render() {
        let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
        return (
            <View style={styles.container}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}}>
                    <Text>Hello world!</Text>
                </View>

                <View style={{flex: 2, backgroundColor: 'skyblue'}}>
                    <Image source={pic} style={{width: 193, height: 110}}/>
                    <Greeting name='Rexxar' />
                    <Greeting name='Jaina' />
                    <Greeting name='Valeera' />
                </View>

                <View style={{flex: 3, backgroundColor: 'steelblue'}}>
                    <Blink text='I love to blink' style={styles.red} />
                    <Blink text='Yes blinking is so great' style={styles.bigblue} />
                    <Blink text='Why did they ever take this out of HTML' style={[styles.bigblue, styles.red]} />
                    <Blink text='Look at me look at me look at me' style={[styles.red, styles.bigblue]} />
                </View>
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
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
