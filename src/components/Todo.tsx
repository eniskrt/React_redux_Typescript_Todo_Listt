import React, { useState } from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux//todoSlice";

interface TodoProps {
  todoProps: TodoType;
}

const Todo = ({ todoProps }: TodoProps) => {
  const { id, content } = todoProps;

  const dispatch = useDispatch();
  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const handleRemove = () => {
    dispatch(removeTodoById(id));
  };

  const handleIpdateTodo = () => { 
    const payload = {
      id:id,
      content:newTodo
    }
    dispatch(updateTodo(payload))
    setEditable(false)
   }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgrey",
        padding: "16px",
        marginTop: "15px",
        borderRadius: "5px",
      }}
    >
      {editable ? (
        <input
          type="text"
          style={{
            width: "400px",
            border: "none",
            borderBottom: "1px solid lightgrey",
            outline: "none",
          }}
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div>{content}</div>
      )}
      <div>
        <IoMdRemoveCircleOutline
          className="icons"
          style={{ marginRight: "8px" }}
          onClick={handleRemove}
        />
        {editable ? (
          <FaCheck className="icons" onClick={handleIpdateTodo} />
        ) : (
          <FaRegEdit className="icons" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
};

export default Todo;
