import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { Footer } from "./components/Footer";
import Header from "./components/header";
import { Todos } from "./components/Todos";
import React, { useEffect, useState } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("On Delete Triggered", todo);
    // todos.splice(todos.indexOf(todo), 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("todo added", title, desc);
    const sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = { sno, title, desc };
    const exists = todos.some((todo) => todo.title === title);
    if (exists) {
      console.log("Todo with this title already exists");
      return;
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="My Todo List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
