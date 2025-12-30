import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <div className="app">
      <h1>Todo List</h1>
      <form className="form" onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ajouter une tâche"
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <span>{todo.text}</span>
            <div className="buttons">
              <button
                className="complete-btn"
                onClick={() => toggleTodo(index)}
              >
                {todo.completed ? "Annuler" : "Terminer"}
              </button>
              <button className="delete-btn" onClick={() => deleteTodo(index)}>
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
      {completedTodos > 0 && (
        <button className="clear-btn" onClick={clearCompleted}>
          Clear Completed
        </button>
      )}
      <div className="stats">
        {totalTodos} total, {completedTodos} terminées
      </div>
    </div>
  );
}

export default App;
