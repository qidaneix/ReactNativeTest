import React from 'react';
import { View } from 'react-native';
import uuidv1 from  'uuid/v1';
import AddTask from './AddTask';
import TasList from './TaskList';
import data from './dataMask';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      tasks: data,
    };
  }

  onInputChange = (value) => {
    this.setState({
      inputText: value,
    });
  }

  onNewTask = (value) => {
    this.setState((prevState) =>
      prevState.tasks.push({
        done: false,
        text: value,
        uuid: uuidv1(),
      })
    );
    this.state({
      inputText: '',
    });
  }

  stateChange = (task) => {
    const tasks = this.state.tasks.map(task => task);
    tasks.some((TASK) => {
      if (TASK.uuid === task.uuid) {
        TASK.done = !TASK.done;
        return true;
      }
      return false;
    });
    this.setState({
      tasks,
    });
  }

  deleteTask = (task) => {
    const tasks = this.state.tasks.map(task => task);
    tasks.some((TASK, index) => {
      if (TASK.uuid === task.uuid) {
        tasks.splice(index, 1);
        return true;
      }
      return false;
    });
    this.setState({
      tasks,
    });
  }

  render() {
    return (
      <View>
        <AddTask
          inputText={this.state.inputText}
          onInputChange={this.onInputChange}
          onNewTask={this.onNewTask} />
        <TaskList
          tasks={this.state.tasks}
          stateChange={this.stateChange}
          deleteTask={this.deleteTask} />
      </View>
    );
  }
};

export default TodoList;
