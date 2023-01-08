import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TodoUpdate } from "./TodoUpdate";

export const TodoItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  return (
    <li>
      <span onClick={() => handleCompleteTodo(todo.id)}>
        <label
          className={`container-done ${todo.done ? "active" : ""}`}
        ></label>
      </span>
      <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
      <button className="btn-delete" onClick={() => handleDeleteTodo(todo.id)}>
        <MdDeleteOutline size="1.5rem" />
      </button>
    </li>
  );
};
