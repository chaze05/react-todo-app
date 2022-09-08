import React, {useState} from 'react'

import style from './UpdateTask.module.css'

const UpdateTask = ({ data, updateId, hideUpdate, saveUpdate }) => {
  const [todoTitle, setTitle] = React.useState(data.data[updateId].todo);
  const [todoDesc, setDesc] = React.useState(data.data[updateId].description);


  const updateForm = (e) => {
    e.preventDefault();
    if (todoTitle === "" || todoDesc === "") {
      return console.log("Please add something to-do");
    } else {
      saveUpdate(updateId,todoTitle, todoDesc);
      hideUpdate();
    }
  };

  return (
    <>
      <div className={style.backdrop}></div>
      <form onSubmit={updateForm} className={style.box}>
        <h1 className={style.header}>Update Task</h1>
        <label className={style.label} htmlFor="">
          Task Name
        </label>
        <input
          className={style.input}
          type="text"
          name=""
          id=""
          value={todoTitle}
          onChange={(e) => setTitle(e.target.value)}
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
          value={todoDesc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button className={style.btn} onClick={saveUpdate}>
          Update
        </button>
        <button className={style.btn} onClick={hideUpdate}>
          Cancel
        </button>
      </form>
    </>
  );
};

export default UpdateTask
