import { ToDoCard } from "./ToDoCard";

export function ToDoList(props) {
  const { todos, selectedTab } = props;
  const filterTodoList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        const tempTodoIndex = todos.findIndex(
          (val) => val.input === todo.input
        );
        return (
          <ToDoCard
            key={todoIndex}
            todo={todo}
            {...props}
            todoIndex={tempTodoIndex}
          />
        );
      })}
    </>
  );
}
