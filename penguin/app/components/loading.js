var React = require('react-native');

var {
  ActivityIndicatorIOS,
  View,
  Text,
  Component,
  StyleSheet
} = React;

var Results = require('./results');

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    backgroundColor: '#48BBEC'
  },
  loadingText: {
    marginTop: 100,
    marginBottom: 150,
    fontSize: 40
  }
});

class Loading extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      restaurant: false,
      match: false
    };

    fetch('http://159.203.254.178:8000/match')
      .then((res) => res.json())
      .then((json) => {
        this.setState({restaurant: json.restaurant});
        this.setState({match: json.matchedUser});
        this.handleMatch();
      });

  }

  handleMatch() {
    setTimeout(() => { 
      this.setState({isLoading: false});
      this.props.navigator.push({
        title: 'Results',
        component: Results,
        passProps: {
          restaurant: this.state.restaurant,
          match: this.state.match
        }
      });
    }, 2000); 
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.loadingText}>Finding you your best match...</Text>
        <ActivityIndicatorIOS
        animating={this.state.isLoading}
        color="black"
        size="large"
        style={{transform: [{scale: 3}]}}>
        </ActivityIndicatorIOS>
      </View>
    )    
  }
}

module.exports = Loading;