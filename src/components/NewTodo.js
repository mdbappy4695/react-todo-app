import React, { useState } from "react";

import style from "./newtodo.module.css";
const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;
  const handleChage = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChage}
        />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="desc">Description:</label>
        <textarea
          type="text"
          id="desc"
          name="desc"
          value={desc}
          onChange={handleChage}
        />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;
