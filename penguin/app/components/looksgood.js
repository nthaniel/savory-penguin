var React = require('react-native');

var {
  Component,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Text
} = React;

// var Selfie = require('./selfie');
var Welcome = require('./welcome');

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  image: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    borderRadius: 40,
    backgroundColor: "blue"
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

class LooksGood extends Component{
  constructor(props){
    super(props);
    this.state = {
      picture: props.picture
    };
  }

  handleNotLookingGood(){
    this.props.navigator.pop();
  }

  handleLookingGood(){
    this.props.navigator.push({
      title: 'Welcome!',
      component: Welcome,
      passProps: {}
    })
  }

  render(){
    return (
      <View style={styles.mainContainer}>
        <Text>How do you look?</Text>
        <Image 
          style={styles.image} 
          source={{uri: this.props.picture}} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleLookingGood.bind(this)}>
          <Text style={styles.buttonText}>I look great!</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleNotLookingGood.bind(this)}>
          <Text style={styles.buttonText}>Let's try that again</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

module.exports = LooksGood;