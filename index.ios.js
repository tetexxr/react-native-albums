// Code for ios here

// Import library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (
    <Text>Some Text</Text>
);

// Render it to a device
AppRegistry.registerComponent('albums', () => App);
