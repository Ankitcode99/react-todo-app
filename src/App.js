import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todo from './components/Todos';
import './App.css';
import {v4 as uuid} from 'uuid'
import about from './components/pages/about'
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
// function App() {
//   return (
//     <div className="App">
//       <Todo/>
//     </div>
//   );
// }

class App extends Component
{
  state={
    todos:[
      {
        id:uuid(),
        title:'React-Native Chat App',
        completed:0
      },
      {
        id:uuid(),
        title:'Medicine Reminder App',
        completed:0
      },
      {
        id:uuid(),
        title:'Pedometer App',
        completed:0
      },
      {
        id:uuid(),
        title:'Watch silicon valley',
        completed:0
      }
    ]
  }

  //toggle complete
  workdone=(id)=>{
    // console.log(id);
    this.setState({ todos:this.state.todos.map(task =>{
      if(task.id===id)
      {
        task.completed = !task.completed;
      }
      return task;
    }) })
  }

  deltask=(id)=>{
    // console.log(id);
    this.setState({ todos:[...this.state.todos.filter(task => task.id!==id)] });
  }

  addTodo = (title)=>{
    const newTask={
      id:uuid(),
      title,
      completed:0
    }
    this.setState({ todos: [...this.state.todos, newTask] })
  }

  render()
  {
    // console.log(this.state.todos)
    return(
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path='/' render={props=>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todo todos={this.state.todos} workdone={this.workdone} deltask={this.deltask}/>
              </React.Fragment>
            )} /> 
            <Route path='/about' component={about} />
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
