import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  return (
    <>
    <div className="todo-container">
      <h1 className="title">My Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter heading"
          className="heading-input"
         />
         <button className="add-heading-button">Add Heading</button>
      </div>
    </div>
    <div className="todo-main"></div>
  </>
  );
};


export default TodoList;
