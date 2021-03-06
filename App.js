import React from 'react';
import './App.css';
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 0, text: "Practice React!"},
        {id: 1, text: "Revised Lectures!"},
        {id: 2, text: "Workout!"},
      ],
      nextId: 3
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

addTodo(todoText){
  let todos = this.state.todos.slice();
  todos.push({id: this.state.nextId, text: todoText});
  this.setState({
    todos: todos,
    nextId: ++this.state.nextId
  });
}


removeTodo(id) {
  this.setState({
    todos: this.state.todos.filter((todo, index) => todo.id !== id)
  })
}

render() {
  return (
    <div className="App">
      <div className="todo-container">
        <Header />
        <TodoInput todoText="" addTodo={this.addTodo}/>
        <ul>
        {
          this.state.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} id={todo.id}
            removeTodo={this.removeTodo}/>
          })
        }
        </ul>
      </div>
    </div>
  );
 }
}


export default App;
