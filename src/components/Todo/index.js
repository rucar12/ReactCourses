import React, {useState} from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


const Todo = ({ todo, toggleComplete, handleDelete, handleEdit,}) => {
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);

    } else {
      todo.title = "";
      setNewTitle(e.target.value);

    }
  };
  return (
    <div className="todo">
      <div >
        <input
            style={{ textDecoration: todo.completed && "line-through" }}
            type="text"
            value={todo.title === "" ? newTitle : todo.title}
            className="list"
            onChange={handleChange}
        />
        <input
            style={{ textDecoration: todo.completed && "line-through" , fontSize:"1em"}}
            type="text"
            value={todo.description === "" ? newTitle : todo.description}
            className="list"
            onChange={handleChange}
        />
      </div>

        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle, newDescription)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>

    </div>
  );
}

export  default Todo;