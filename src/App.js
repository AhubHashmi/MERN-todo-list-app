import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ToDo from "./components/ToDo";
import { baseURL } from "./utils/constant";
import Popup from "./components/Popup";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [update, setUpdate] = useState(false);
  const [popup, setPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}/getTodo`)
      .then((res) => setTodos(res.data))
      .catch((error) => console.log(error));
  }, [update]);

  const addTodo = () => {
    axios
      .post(`${baseURL}/todo`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdate((preVal) => !preVal);
        setInput("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container-fluid m-3 p-3">
        <h1>Welcome to ToDo List App!</h1>
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter ToDo Task"
        ></input>
        <button onClick={addTodo}>ADD</button>
      </div>
      <div>
        {todos.map((t) => (
          <ToDo
            key={t._id}
            text={t.toDo}
            id={t._id}
            setUpdate={setUpdate}
            setPopup={setPopup}
            setPopupContent={setPopupContent}
          />
        ))}
      </div>
      <div>
        {popup && <Popup setPopup={setPopup} setUpdate={setUpdate} popupContent={popupContent} />}
      </div>
    </>
  );
}

export default App;
