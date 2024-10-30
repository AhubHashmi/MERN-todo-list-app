import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { baseURL } from "../utils/constant";
import axios from "axios";

const ToDo = ({ text, id, setUpdate, setPopup, setPopupContent }) => {
  const delTodo = () => {
    axios
      .delete(`${baseURL}/delTodo/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdate((preVal) => !preVal);
      })
      .catch((error) => console.log(error));
  };

  const updateTodo = () => {
    setPopupContent({ text, id });
    setPopup(true);
  };

  return (
    <div className="todo-container">
      <div className="todo-item">
        <span>{text}</span>
        <CiEdit onClick={updateTodo} />
        <MdDelete onClick={delTodo} />
      </div>
    </div>
  );
};

export default ToDo;
