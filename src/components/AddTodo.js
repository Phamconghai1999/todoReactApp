import { React, useState } from "react";
import PropTypes from "prop-types";

const AddTodo = (props) => {
  const addTodo = props.addTodoFnc;
  const [newTodoTitle, setNewTodoTitleState] = useState("");
  const [newTodoContent, setNewTodoContentState] = useState("");

  const changeTitle = (event) => {
    setNewTodoTitleState(event.target.value);
  };
  const changeContent = (event) => {
    setNewTodoContentState(event.target.value);
  };
  const submitForm = (event) => {
    event.preventDefault();
    if (newTodoTitle !== "" && newTodoContent !== "") {
      addTodo(newTodoTitle, newTodoContent);
      setNewTodoTitleState("");
      setNewTodoContentState("");
      console.log(newTodoTitle, newTodoContent);
    }
  };
  return (
    <form className="input-group mb-3" onSubmit={submitForm}>
      <input
        sm={1}
        type="text"
        className="form-control"
        name="newTodoTitle"
        value={newTodoTitle}
        placeholder="Todo Title"
        aria-describedby="button-addon2"
        onChange={changeTitle}
      />
      <input
        type="text"
        className="form-control "
        name="newTodoContent"
        value={newTodoContent}
        placeholder="Add todo in there !!!"
        aria-describedby="button-addon2"
        onChange={changeContent}
      />
      <button className="btn btn-primary" type="submit" id="button-addon2">
        Add
      </button>
    </form>
  );
};
AddTodo.propTypes = {
  addTodoFnc: PropTypes.func.isRequired,
};

export default AddTodo;
