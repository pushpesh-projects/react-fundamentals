import { useState } from "react";

const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleInput(e) {
    setTodo(e.target.value);
  }
  function handleAddTodo() {
    if (todo.trim() === "") {
      return;
    }
    setTodoList([...todoList, { id: Date.now(), text: todo.trim() }]);
    setTodo("");
    console.log(todoList);
  }
  function handleDeleteTodo({ id }) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }
  return (
    <div>
      <input type="text" value={todo} onChange={handleInput} />
      <button onClick={handleAddTodo}>Add</button>

      {todoList.length ? (
        <div>
          <ul>
            {todoList.map((todo) => {
              return (
                <li key={todo.id}>
                  {todo.text}
                  <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
                </li>
              );
            })}
          </ul>
          <button onClick={() => setTodoList([])}>Delete All</button>
        </div>
      ) : (
        <div> No todos yet </div>
      )}
    </div>
  );
};

export default ToDo;
