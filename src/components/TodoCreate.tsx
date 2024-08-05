import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import { TodoType } from "../types/Types";

const TodoCreate = () => {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if(newTodo.trim().length == 0){
      alert("todo giriniz!")
    }

    const payload :TodoType = {
      id:Math.floor(Math.random()*999999999),
      content:newTodo
    }
    dispatch(createTodo(payload))
    setNewTodo("");
  };

  return (
    <div className="todo-create">
      <input
        type="text"
        placeholder="Todo giriniz..."
        className="todo-input"
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
      />
      <button 
        className="todo-create-button" 
        onClick={handleCreateTodo}>
        Oluştur
      </button>
    </div>
  );
};

export default TodoCreate;
