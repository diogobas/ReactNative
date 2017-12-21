import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Blink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 10000);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';

        return (
          <Text style={this.props.style}>{display}</Text>
        );
    }
}
