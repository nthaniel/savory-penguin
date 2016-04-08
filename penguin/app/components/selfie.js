var React = require('react-native');

var {
  Component,
  View,
  StyleSheet,
  TouchableHighlight,
  Image
} = React;

// import Camera from 'react-native-camera';

var Camera = require('react-native-camera').default;

var LooksGood = require('./looksgood');

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 40
  }
});

class Selfie extends Component{
  constructor(props){
    super(props);
    this.state = {
      picture: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          type="front"
          aspect={Camera.constants.Aspect.fill}>
          <TouchableHighlight 
            style={styles.capture} 
            onPress={this.takePicture.bind(this)}
            underlayColor="purple">
            <Image 
              source={require('../assets/glyphicon-camera.png')}
            />
          </TouchableHighlight>
        </Camera>
      </View>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => {
        console.log(data);
        this.setState({picture: data});
        this.handleMoveOn();
      })
      .catch(err => console.error(err));
  }

  handleMoveOn() {
    this.props.navigator.push({
      title: "Looking Good!",
      component: LooksGood,
      passProps: {picture: this.state.picture}
    });
  }
};

module.exports = Selfie;