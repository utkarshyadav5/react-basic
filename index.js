// Import library for creating component

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create a component

const App = () => (
    <Header />
);

//render it to device 

AppRegistry.registerComponent('albums', () => App);
