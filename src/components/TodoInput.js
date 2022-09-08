import React from 'react'

import style from './TodoInput.module.css'

const TodoInput = ({ hideCreateTask,create, updateTask }) => {
    
    const [todo, setTodo] = React.useState("");
    const [description, setDescription] = React.useState("");
    
    const submitForm = (e) =>{
        e.preventDefault();
        if (todo === "" || description === "") {
          return console.log("Please add something to-do");
        }else{
            create(todo, description);
        }
        hideCreateTask(false)
    }

    return (
      <>
        <div className={style.backdrop}></div>
        <form className={style.box}>
          <h1 className={style.header}>Create New Task</h1>
          <label className={style.label} htmlFor="">
            Task Name
          </label>
          <input
            className={style.input}
            type="text"
            name=""
            id=""
            onChange={(e) => setTodo(e.target.value)}
          />
          <label htmlFor="" className={style.label}>
            Description
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            className={style.input}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className={style.btn} onClick={submitForm}>
            Create
          </button>
          <button className={style.btn} onClick={hideCreateTask}>
            Cancel
          </button>
        </form>
      </>
    );
};

export default TodoInput
