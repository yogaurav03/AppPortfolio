/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MainNavigator from './navigation/MainNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainNavigator);
