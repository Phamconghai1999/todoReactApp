import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItems from "./TodoItems";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from "uuid";

const TodoBody = () => {
  const [todoState, setTodoState] = useState([]);
  // use react hooks
  useEffect(() => {
    const getTodo = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=2"
        );

        let newData = response.data.map((obj) => {
          return {
            id: uuidv4(),
            title: obj.title,
            content: obj.body,
            completed: false,
          };
        });
        console.log(newData);
        setTodoState(newData);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTodo();
  }, []);

  //Function for handle items
  // mark completed
  const markComplete = (id) => {
    const newTodo = todoState.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoState(newTodo);
  };
  // deleteTodo
  const deleteTodo = (id) => {
    const newTodo = todoState.filter((todo) => {
      return todo.id !== id;
    });
    setTodoState(newTodo);
  };
  // add todo
  const addTodo = (title, content) => {
    const newTodo = [
      ...todoState,
      {
        id: uuidv4(),
        title,
        content,
        completed: false,
      },
    ];
    setTodoState(newTodo);
  };
  return (
    <div className="">
      <AddTodo addTodoFnc={addTodo} />
      {todoState.map((todo) => {
        return (
          <TodoItems
            key={todo.id}
            todoProps={todo}
            markCompleteFnc={markComplete}
            deleteTodoFnc={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoBody;
