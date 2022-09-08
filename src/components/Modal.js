import React from 'react'

import style from "./Modal.module.css"

const Modal = ({ deleteItem, hideConfirm }) => {
    
    const deletedItem = () =>{
        deleteItem()
        hideConfirm()
    }
    
    return (
      <>
        <div className={style.backdrop}></div>
        <div className={style.confirm}>
          <h3>Are you sure you want to delete this task?</h3>
          <button className={style.btn} onClick={hideConfirm}>
            No
          </button>
          <button className={style.btn} onClick={deletedItem}>
            Yes
          </button>
        </div>
      </>
    );
};

export default Modal
