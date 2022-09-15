import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Todo from "./Todo";
import {
  clearCompleted,
  selectActiveTodos,
  selectTodos,
  selectCompletedTodos,
  showAllFunction,
  showActiveFunction,
  showCompletedFunction,
} from "../../features/todoSlice";
import {
  selectShowTodos,
  selectShowActiveTodos,
  selectShowCompletedTodos,
} from "../../features/todoSlice";
import "./Body.css";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();

  const [todosToRender, setTodosToRender] = useState([]);

  const todos = useSelector(selectTodos);
  const activeTodos = useSelector(selectActiveTodos);
  const completedTodos = useSelector(selectCompletedTodos);

  const showTodos = useSelector(selectShowTodos);
  const showActiveTodos = useSelector(selectShowActiveTodos);
  const showCompletedTodos = useSelector(selectShowCompletedTodos);

  const showAllHandler = () => {
    dispatch(showAllFunction());
  };

  const showActiveHandler = () => {
    dispatch(showActiveFunction());
  };

  const showCompletedHandler = () => {
    dispatch(showCompletedFunction());
  };

  const clearCompletedHandler = () => {
    dispatch(clearCompleted());
  };

  useEffect(() => {
    if (showActiveTodos) {
      setTodosToRender(activeTodos);
    } else if (showCompletedTodos) {
      setTodosToRender(completedTodos);
    } else if (showTodos) {
      setTodosToRender(todos);
    }
  }, [
    activeTodos,
    completedTodos,
    todos,
    setTodosToRender,
    showActiveTodos,
    showCompletedTodos,
    showTodos,
  ]);

  const total = todos.filter((todo) => todo.isComplete === false);

  return (
    <div className="app__body">
      {todosToRender.map((todo, index) => (
        <Todo key={todo.id} todo={todo} />
      ))}

      {total.length > 0 && (
        <div className="app__body-actions">
          <div className="app__todo-total">{total.length} items left</div>
          <div className="body-actions">
            <p
              className={`${showTodos ? "active" : ""}`}
              onClick={showAllHandler}
            >
              All
            </p>
            <p
              className={`${showActiveTodos ? "active" : ""}`}
              onClick={showActiveHandler}
            >
              Active
            </p>
            <p
              className={`${showCompletedTodos ? "active" : ""}`}
              onClick={showCompletedHandler}
            >
              Completed
            </p>
          </div>
          <div className="app__todo-clear" onClick={clearCompletedHandler}>
            Clear Completed
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
