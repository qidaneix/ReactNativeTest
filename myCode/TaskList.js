import React from 'react';
import { View } from 'react-native';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
  
  stateChange = (task) => {
    this.props.stateChange(task);
  }

  deleteTask = (task) => {
    this.props.deleteTask(task);
  }

  render() {
    const taskElement = this.props.tasks.map(task => {
      <TaskItem
        task={task}
        stateChange={this.stateChange}
        deleteTask={this.deleteTask}
        key={task.uuid} />
    });
    return (
      <View>{taskElement}</View>
    );
  }
};

export default TaskList;
