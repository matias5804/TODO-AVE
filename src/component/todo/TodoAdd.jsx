import React from "react";
import { useForm } from "../../hooks/useForm";
import { BsFillPlusCircleFill } from "react-icons/bs";

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) return;

    let newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit} className="form-add">
      <input
        type="text"
        className="input-add"
        name="description"
        value={description}
        onChange={onInputChange}
        placeholder="Agregar tarea..."
      />

      <button className="btn-add" type="submit">
        <BsFillPlusCircleFill color="#9F57FA" size="3rem" cursor="pointer" />
      </button>
    </form>
  );
};
