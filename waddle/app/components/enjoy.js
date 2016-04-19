// Display both users' images and an "Enjoy your lunch" message

var React = require('react-native');
var styles = require('./Styles');
var IP_address = require('../../environment.js').IP_address;


var {
  Component,
  View,
  Text,
  Image
} = React;

class Enjoy extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    var imageLinkMe = `${IP_address}/users/${this.props.username}/profilePhoto?${Date.now()}`;
    var imageLinkMatch = `${IP_address}/users/${this.props.match.username}/profilePhoto?${Date.now()}`;
    return (
      <View style={styles.mainContainer}>
        <Image resizeMode="stretch" source={require('./../assets/enjoy.jpg')}
          style={styles.backgroundImage}
        />
        <View style={styles.avatarContainer}>
          <Image source={{uri: imageLinkMe}} style={styles.avatarMatch} />
          <Image source={{uri: imageLinkMatch}} style={styles.avatarMatch} />
        </View>
        <Text style={styles.title}> Enjoy your lunch!</Text>
      </View>
    )
  }
}

module.exports = Enjoy;