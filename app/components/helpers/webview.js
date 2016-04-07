import React, {
  Component,
  WebView,
  View,
  StyleSheet
} from 'react-native';

export default class Web_View extends Component{
    render(){
      return (
        <View style={styles.container}>
          <WebView source={{uri: this.props.url}} />
        </View>
      )
    }
};

Web_View.propTypes = {
  url: React.PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
});
