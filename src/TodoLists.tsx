import { useSelector } from "react-redux";
import { TodoModel } from "./TodoModel";
import TodoItem from "./TodoItem";
import { RootState } from "./store";

function TodoLists() {
  const todos: TodoModel[] = useSelector(
    (state: RootState) => state.todo.todos
  );

  return (
    <ul className="mt-5 text-stone-200 w-[450px] ml-[630px]">
      {todos.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default TodoLists;
