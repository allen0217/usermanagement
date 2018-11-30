import React, {Component} from 'react';
import {connect} from 'react-redux';

import AddTodo from '../../components/AddTodo';
import * as actions from '../../actions';

class App extends Component {
  render() {
    console.log(this.props.todos);
    return (
      <div>
        <AddTodo addTodo={this.props.addTodo} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(actions.addTodo(text));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);