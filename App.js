import React from 'react';
import { StyleSheet, Text, View, Picker, AppState } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 5
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = (appState) => {
    if (appState === 'background') {
      // TODO: Schedule background notification
      console.log('app is in background', this.state.seconds);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Choose notification time in seconds
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.seconds}
          onValueChange={seconds => this.setState({ seconds })}
        >
          <Picker.Item label="5" value={5} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="15" value={15} />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    width: 100
  }
});
