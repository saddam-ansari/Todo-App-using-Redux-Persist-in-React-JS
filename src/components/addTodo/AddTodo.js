import React, { useState } from "react";
import styles from "./AddTodo.style";

const AddTodo = ({addTodo}) => {
  const [todo, setTodo] = useState("");
  
  return (
    <div>
      <input
        style={styles.inputField}
        placeholder="Enter Todo" value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <button style={styles.submitButton} onClick={() => {addTodo(todo); setTodo("")}}>
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
