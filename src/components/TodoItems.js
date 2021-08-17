import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const TodoItems = (props) => {
  const markCompleteItems = props.markCompleteFnc;
  const deleteTodoItems = props.deleteTodoFnc;
  const todoItemProps = { ...props.todoProps };

  let todoItemTitleStyles = {
    background: "white",
    textDecoration: todoItemProps.completed ? "line-through" : "none",
    color: "black",
  };
  let todoItemContentStyles = {
    background: "#f4f4f4",
    textDecoration: todoItemProps.completed ? "line-through" : "none",
    color: "black",
  };
  return (
    <Container fluid>
      <Row>
        <Col sm={1}>
          <input
            className="form-check-input"
            type="checkbox"
            onChange={markCompleteItems.bind(this, todoItemProps.id)}
            checked={todoItemProps.completed}
          />
        </Col>
        <Col>
          <h5 style={todoItemTitleStyles}>{todoItemProps.title}</h5>
          <p style={todoItemContentStyles}>{todoItemProps.content}</p>
        </Col>
        <Col sm={1}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={deleteTodoItems.bind(this, todoItemProps.id)}
          >
            Delete
          </button>
        </Col>
      </Row>
    </Container>
  );
};
//PropTypes
TodoItems.propTypes = {
  markCompleteFnc: PropTypes.func.isRequired,
  deleteTodoFnc: PropTypes.func.isRequired,
  todoProps: PropTypes.object.isRequired,
};
export default TodoItems;
