import React from "react";
import "./todo.css";
import brandLogo from "../../assets/brand.png";
import { useTodo } from "../../hooks/useTodo";
import { TodoList } from "../todo-list/TodoList";
import { TodoAdd } from "./TodoAdd";

const ToDo = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  return (
    <div className="task-big-container">
      <div className="div-img">
        <img src={brandLogo} alt="brand" />
      </div>
      <div className="task-container">
        <div className="div-num-task">
          <h3>
            Tareas: <span>{todosCount}</span>
          </h3>
          <h3>
            Pendientes: <span>{pendingTodosCount}</span>
          </h3>
        </div>

        <TodoList
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />

        <div className="div-record">
          <h3>Programar recordatorio</h3>
        </div>

        <TodoAdd handleNewTodo={handleNewTodo} />
      </div>
    </div>
  );
};

export default ToDo;
