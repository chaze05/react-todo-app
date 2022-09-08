import React, { useState } from 'react'

import style from './TodoItem.module.css'

import Modal from './Modal';
import UpdateTask from './UpdateTask';

const TodoItem = ({ data, deleteItem, completeItem, updateTask }) => {

  const [showModal, setModal] = React.useState(false);
  const [showUpdate, setUpdate] = React.useState(false);
  const [updateId, setUpdateId] = React.useState("");
  const todoItems = { data };

  const confirmDelete = () => {
    setModal(!showModal);
  };


  const toggleUpdate = () => {
    setUpdate(!showUpdate);
  };

  const callUpdate = (index) => {
      setUpdateId(index);
      toggleUpdate();
  }




  const todoList = data.map((item, index) => {
    return (
      <div key={index} className={`${style.item} ${ item.complete ? style.completed : ""}`}>
        <span className={style.remove} onClick={confirmDelete}>
          x
        </span>
        <h2 className={style.title}>{item.todo}</h2>
        <p className={style.description}>{item.description}</p>
        <div className={style.actions}>
          <button className={style.btn} onClick={() => callUpdate(index)}>Update</button>
          <button className={style.btn} onClick={() => completeItem(index)}>{ item.complete ? "Re-do" : "Complete"}</button>
        </div>
      </div>
    );
  });
  return (
    <>
      {showModal ? <Modal deleteItem={deleteItem} hideConfirm={confirmDelete} /> :  ""}
      {showUpdate ? <UpdateTask updateId={updateId} data={todoItems} hideUpdate={toggleUpdate} saveUpdate={updateTask} /> :  ""}
      <div id={updateId} className={style.box}>{todoList}</div>
    </>
  );
};

export default TodoItem
