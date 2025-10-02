import "./App.css";
import { About } from "./components/About";
import { AddTodo } from "./components/AddTodo";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Todos } from "./components/Todos";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    const sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = { sno, title, desc };

    if (todos.some((todo) => todo.title === title)) {
      console.log("Todo with this title already exists");
      return;
    }
    setTodos([...todos, myTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Header title="My Todo List" searchBar={false} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
