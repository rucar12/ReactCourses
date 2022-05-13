import "./App.css";
import {useEffect, useState} from "react";
import {Todo,Title,AddTodo} from "./components"
import {
    collection,
    query,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
    limit,
    where,

} from "firebase/firestore";
import {db} from "./firebase";

const App = () => {
    const [todos, setTodos] = useState([]);
    const limited = 5;
    const [limitNumber, setLimitNumber] = useState(limited);
    const [filter, setFilter] = useState(false);

    const filtering = (text) => {
        if (text === "All") {
            setFilter("all");
            return "all";
        } else if (text === "Completed") {
            setFilter(true);
            return true;
        } else if (text === "Actual") {
            setFilter(false)
            return false;
        }
    }
    useEffect(() => {
        let q;
        if (filter === true || filter === false) {
            q = query(
                collection(db, "todos"),
                limit(limitNumber),
                where("completed", "==", filter));
        } else {
            q = query(
                collection(db, "todos"),
                limit(limitNumber));
        }

        const unsub = onSnapshot(q, (querySnapshot) => {
            let todosArray = [];

            querySnapshot.forEach((doc) => {
                todosArray.push({...doc.data(), id: doc.id});
            });
            setTodos(todosArray);
        });
        return () => unsub();

    }, [limitNumber, filter]);

    const handleEdit = async (todo, title, description) => {
        await updateDoc(doc(db, "todos", todo.id), {title: title, description: description});
    };
    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, "todos", todo.id), {completed: !todo.completed});
    };
    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "todos", id));
    };
    return (
        <div className="App">
            <div>
                <Title/>
            </div>
            <div>
                <AddTodo/>
            </div>
            <div style={{textAlign: "center"}}>
                <div style={{marginTop: "10px"}}>
          <span
              style={{fontSize: "1.5em", padding: "0px 10px", cursor: "pointer"}}
              onClick={(e) => {
                  filtering(e.target.outerText)
              }}
          >All</span>
                    <span
                        style={{fontSize: "1.5em", padding: "0px 10px", cursor: "pointer"}}
                        onClick={(e) => {
                            filtering(e.target.outerText)
                        }}
                    >Completed</span>
                    <span
                        style={{fontSize: "1.5em", padding: "0px 10px", cursor: "pointer"}}
                        onClick={(e) => {
                            filtering(e.target.outerText)
                        }}
                    >Actual</span>
                </div>
            </div>
            <div className="todo_container">
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                ))}
            </div>
            <div style={{textAlign: "center"}}>
                <button onClick={() => {
                    setLimitNumber(limitNumber + limited)
                    /*console.log(limitNumber)*/
                }}
                        style={{
                            border: "none",
                            padding: "10px",
                            marginTop: "3vh",
                            borderRadius: "10px",
                            cursor: "pointer"
                        }}>
                    Show {limited} more
                </button>
            </div>
        </div>
    );
}
export default App;
