import React from 'react';
import { TextInput, View, Alert, Button, Text } from 'react-native';

class AddTask extends React.Component {

  handleChange = (text) => {
    this.props.onInputChange(text);
  }

  handlePress = () => {
    if (this.props.inputText) {
      this.props.onNewTask(this.props.inputText);
    } else {
      Alert.alert('输入值！');
    }
  }

  render() {
    return (
      <View>
        <Text>
          请输入新任务：
        </Text>
        <TextInput placeholder='请输入新任务' onChangeText={this.handleChange} />
        <Button title='添加' onPress={this.handlePress} />
      </View>
    );
  }
};

export default AddTask;
