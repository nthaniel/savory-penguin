var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  Component,
  TouchableHighlight
} = React;

var Welcome = require('./welcome');
var Selfie = require('./selfie');

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 0,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      // ?
    }
  }

  handleSubmit(){
    console.log('insert OAuth integration here');
    this.props.navigator.push({
      title: "Welcome",
      component: Welcome,
      passProps: {name: 'garbage'}
      // make it impossible to go back to sign in screen
      // passProps: {userInfo: res} 
      // should pass user ID, other details as received from OAuth
    });
  }

  handleNewUser(){
    console.log('new user!');
    this.props.navigator.push({
      title: "Take a selfie!",
      component: Selfie
    })
  }

  render(){
    return (
      <View style={styles.mainContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="rgba(255, 255, 255, 0.95)">
          <Text style={styles.buttonText}>Sign in with Facebook</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleNewUser.bind(this)}
          underlayColor="rgba(255, 255, 255, 0.95)">
          <Text style={styles.buttonText}>I'm new here</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

module.exports = Main;