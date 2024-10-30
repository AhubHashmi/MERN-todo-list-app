import axios from "axios";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { baseURL } from "../utils/constant";

const Popup = ({ setPopup, popupContent, setUpdate }) => {
  const [input, setInput] = useState(popupContent.text);

  const updateTodo = () => {
    axios
      .put(`${baseURL}/updateTodo/${popupContent.id}`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdate((preVal) => !preVal);
        setPopup(false);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="todo-container">
      <div className="todo-item">
        <h1>Update Task</h1>
        <ImCross
          onClick={() => {
            setPopup(false);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Update ToDo Task"
        ></input>
        <button onClick={updateTodo}>UPDATE</button>
      </div>
    </div>
  );
};

export default Popup;
