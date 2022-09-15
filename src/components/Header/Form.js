import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { create } from "../../features/todoSlice";
import "./Header.css";

const Form = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(create(text));

    setText("");
  };

  return (
    <form
      className="app__form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="app__circle">
        <div className="app__circleInner"></div>
      </div>
      <div className="app__formInner">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Create a new todo..."
          required
        />
      </div>
      <input type="submit" className="app__submit" />
    </form>
  );
};

export default Form;
