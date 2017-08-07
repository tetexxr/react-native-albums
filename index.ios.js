// Code for ios here

// Import library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
	<View>
		<Header headerText={'Albums'} />
		<AlbumList />
	</View>
);

// Render it to a device
AppRegistry.registerComponent('albums', () => App);
