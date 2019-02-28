import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/Header';

const App = () => (
    <Text style={{ flex: 1, backgroundColor: 'white', fontSize: 20 }} >Some Text</Text>
);

AppRegistry.registerComponent('albums', () => App);
