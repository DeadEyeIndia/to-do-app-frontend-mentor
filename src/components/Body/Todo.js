/* eslint-disable no-undef */
import React from "react";
import { useDispatch } from "react-redux";

import { toggle, remove } from "../../features/todoSlice";
import Cross from "../../images/icon-cross.svg";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = (id) => () => {
    dispatch(toggle(id));
  };

  const removeTodo = (id) => () => {
    dispatch(remove(id));
  };

  return (
    <div className="app__todo">
      <div className="app__todo-left">
        <div
          className={
            todo.isComplete === true
              ? "app__todo-leftInnerCompleted"
              : "app__todo-leftInner"
          }
          onClick={handleToggle(todo.id)}
        ></div>
        <div
          className={todo.isComplete === true ? "app__todo-check" : ""}
          onClick={handleToggle(todo.id)}
        ></div>
      </div>
      <div className="app__todo-right">
        <p
          className={
            todo.isComplete === true
              ? "app__todo-text_underline"
              : "app__todo-text"
          }
        >
          {todo.text}
        </p>
        <img
          src={Cross}
          alt=""
          className="app__todo-del"
          onClick={removeTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
