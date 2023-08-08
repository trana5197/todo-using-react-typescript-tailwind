import { useDispatch } from "react-redux";
import { TodoModel } from "./TodoModel";
import { AppDispatch } from "./store";
import { deleteTodo, editTodo, toggleComplete } from "./todoSlice";
import { useEffect, useRef, useState } from "react";

interface Props {
  item: TodoModel;
}

function TodoItem({ item }: Props) {
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const [newTodoName, setNewTodoName] = useState<string | number>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const isCompletedTask = item.isCompleted;

  const dispatch = useDispatch<AppDispatch>();

  function handleSubmit(e: React.FormEvent, id: number): void {
    e.preventDefault();
    dispatch(editTodo(id, newTodoName));

    setCanEdit(false);
  }

  useEffect(
    function () {
      inputRef.current?.focus();
    },
    [canEdit]
  );

  return (
    <li
      className={`flex items-center justify-between my-3 px-6 py-3 ${
        isCompletedTask ? "bg-green-600" : "bg-red-600"
      } rounded-md`}
    >
      {canEdit ? (
        <form onSubmit={(e) => handleSubmit(e, item.id)}>
          <input
            ref={inputRef}
            defaultValue={item.name}
            onChange={(e) => setNewTodoName(e.target.value)}
            className="text-stone-800 px-2 py-3 transition-all uppercase rounded-lg w-[70%] focus:outline-none focus:ring focus:ring-red-400 focus:outline-offset-2"
          />
        </form>
      ) : isCompletedTask ? (
        <s className="text-xl uppercase">{item.name}</s>
      ) : (
        <span className="text-xl uppercase">{item.name}</span>
      )}
      <div className="mr-0 flex items-center gap-1.5">
        <span
          className="material-symbols-outlined cursor-pointer"
          onClick={() => setCanEdit((state) => !state)}
        >
          edit
        </span>
        <span
          className="material-symbols-outlined cursor-pointer"
          onClick={() => dispatch(deleteTodo(item.id))}
        >
          delete
        </span>
        <span
          className="material-symbols-outlined cursor-pointer"
          onClick={() => dispatch(toggleComplete(item.id))}
        >
          done
        </span>
      </div>
    </li>
  );
}

export default TodoItem;
