import React from 'react';
import { View } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

class TaskItem extends React.Component {
    
  handleChange = () => {
    this.props.stateChange(this.props.task);
  }

  handlePress = () => {
    this.props.deleteTask(this.props.task);
  }

  render() {
    const task = this.props.task;
    return (
      <View>
        <CheckBox
          title={task.text}
          checked={task.done}
          onPress={this.handleChange} />
        <Button title='添加' onPress={this.handlePress} />
      </View>
    );
  }
};

export default TaskItem;
