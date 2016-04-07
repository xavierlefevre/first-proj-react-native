import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

import Main from './app/components/main';

class reactNativeFirst extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.mainContainer}
        initialRoute={{
          title: 'First Notetaker',
          component: Main
        }} />
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
});

AppRegistry.registerComponent('reactNativeFirst', () => reactNativeFirst);
