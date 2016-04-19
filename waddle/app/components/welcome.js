// The landing page after login / new user flow. Greets the user and lets them request a match.

var React = require('react-native');
var Loading = require('./loading');
var IP_address = require('../../environment.js').IP_address;
var styles = require('./Styles');

var {
  Text,
  View,
  Component,
  StyleSheet,
  TouchableHighlight,
  Image
} = React;

class Welcome extends Component{
  handleSubmit(){
    console.log('you did it, you pushed the lunch buddy button');
    // do stuff w/ navigator
    this.props.navigator.push({
      title: "Finding you a match",
      component: Loading,
      passProps: {username: this.props.username}
    });
  }

  render(){
    var imageLink = this.props.picture || `${IP_address}/users/${this.props.username}/profilePhoto?${Date.now()}`;
    console.log('match.js link to image: ', imageLink);
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.welcomeText}>welcome, {this.props.firstName || 'rando'}</Text>
        <Image 
          style={styles.avatar} 
          source={{uri: imageLink}} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="#f9ecdf">
          <Text style={styles.buttonText}>gimme a lunch buddy</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

module.exports = Welcome;
