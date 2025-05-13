import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { ToDoList } from "./components/ToDoList";
import { ToDoInput } from "./components/ToDoInput";
import { useState, useEffect } from "react";

function App() {
  /*const todoList = [
    { input: "Hello! Add your first todo!", complete: true },
    { input: "Get the groceries!", complete: false },
    { input: "Learn how to web design!", complete: false },
    { input: "Say hi to gran gran!", complete: true },
  ];*/

  const [todoList, setTodoList] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState("All");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todoList, { input: newTodo, complete: false }];
    setTodoList(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todoList];
    let completedTodo = todoList[index];
    completedTodo["complete"] = "true";
    newTodoList[index] = completedTodo;
    setTodoList(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    let newTodoList = todoList.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodoList(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todoList: currTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }

    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodoList(db.todoList);
  }, []);

  return (
    <>
      <Header todos={todoList} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todoList}
      />
      <ToDoList
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        selectedTab={selectedTab}
        todos={todoList}
      />
      <ToDoInput todos={todoList} handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
