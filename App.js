import React, { Component } from 'react';
import { safeAreaView, Text, Stylesheet } from 'react-native'

export default class App extends Component {
    render() {
        return ( <
            safeAreaView style = { Stylesheet.container } >
            <
            Text > Olá Mundo < /Text>  <
            /safeAreaView >
        )
    }
}

const style = Stylesheet.create({
    container: {
        flex: 1
    }
});