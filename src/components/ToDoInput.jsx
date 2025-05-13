import { useEffect, useState } from "react";

export function ToDoInput(props) {
  const { todos, handleAddTodo } = props;
  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    todos.filter((val) => {
      return val.input === inputValue;
    }).length > 0
      ? setIsDisabled(true)
      : setIsDisabled(false);
  }, [inputValue]);

  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          if (!inputValue) {
            return;
          }
          handleAddTodo(inputValue);
          setInputValue("");
        }}
        disabled={isDisabled}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
