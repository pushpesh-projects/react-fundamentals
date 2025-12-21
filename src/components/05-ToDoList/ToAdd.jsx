import React, { useState } from "react";

const ToAdd = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleInput(e) {
    setTodo(e.target.value);
  }
  function handleAddTodo() {
    if (todo.trim() === "") {
      return;
    }
    setTodoList([...todoList, todo.trim()]);
    setTodo("");
  }
  return (
    <div>
      <input type="text" value={todo} onChange={handleInput} />
      <button onClick={handleAddTodo}>Add</button>

      {todoList.length ? (
        <ul>
          {todoList.map((todo, i) => {
            return <li key={i}>{todo}</li>;
          })}
        </ul>
      ) : (
        <div> No todos yet </div>
      )}
    </div>
  );
};

export default ToAdd;
