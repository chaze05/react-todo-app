import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import TodoItem from './components/TodoItem'
import TodoInput from './components/TodoInput';

function App() {

    const [todoItems, setTodoItems] = React.useState([
      { todo: "Mow the lawn", complete: false, description:'Go outside and clean up the grass' },
      { todo: "Do Laundry", complete: false, description:'Get all the dirty clothes on each room and wash them.' },
      { todo: "Make Breakfast", complete: false, description:'Prepare a nice and lovely meal for breakfast at 5AM' },
      { todo: "Make Dinner", complete: false, description:'Prepare a nice and lovely meal for dinner at 7PM' },
    ]);

    const createTodoItem = (todo,description) => {
      const newTodoItems = [...todoItems, { todo, complete: false, description }];
      setTodoItems(newTodoItems);
    };

    const [showResults, setShowResults] = React.useState(false);
    const toggleCreateTask = () =>{
      setShowResults(false);
    }

    const deleteTodoItem = (index) => {
      const newTodoItems = [...todoItems];
      newTodoItems.splice(index, 1);
      setTodoItems(newTodoItems);
    };

    const completeTodoItem = (index) => {
      const newTodoItems = [...todoItems];
      newTodoItems[index].complete === false ? (newTodoItems[index].complete = true) : (newTodoItems[index].complete = false);
      console.log(newTodoItems);
      setTodoItems(newTodoItems);
    };

    const updateTodoItem = (index,todoItem,tododesc) => {
      console.log(index, todoItem, tododesc);
      const newTodoItems = [...todoItems];
      let todoObj = { todo: todoItem, complete: false, tododesc };
      newTodoItems.splice(index, 1, todoObj);
      if (todoItem === null || todoItem === "") {
        return;
      } else {
        newTodoItems[index].todo = todoItem;
        newTodoItems[index].description = tododesc;
      }
      setTodoItems(newTodoItems);
    };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <button className="btn_add" onClick={() => setShowResults(true)}>
        Add Task
      </button>
      {showResults ? <TodoInput hideCreateTask={toggleCreateTask} create={createTodoItem} /> : ""}
      <TodoItem data={todoItems} updateTask={updateTodoItem} deleteItem={deleteTodoItem} completeItem={completeTodoItem} />
    </div>
  );
}

export default App;
