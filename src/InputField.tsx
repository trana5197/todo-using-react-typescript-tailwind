import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { TodoModel } from "./TodoModel";
import { AppDispatch } from "./store";

function InputField() {
  const [task, setTask] = useState<string | number>("");

  const dispatch = useDispatch<AppDispatch>();

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    const newTodo: TodoModel = {
      id: Date.now(),
      name: typeof task === "string" ? task.toUpperCase() : task,
      isCompleted: false,
    };

    dispatch(addTodo(newTodo));
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="text"
        placeholder="Enter the task"
        className="mt-5 w-[440px] h-10 px-3 py-7 focus:outline-none focus:ring focus:ring-blue-300 focus:outline-offset rounded-xl transition-all relative"
      />
      <button
        type="submit"
        className="bg-stone-300 p-3 rounded-full absolute left-[1010px] top-[100px] focus:outline-none focus:ring focus:ring-stone-900 focus:outline-offset-2 transition-all active:scale-50 hover:bg-stone-400 text-stone-900 font-bold uppercase"
      >
        Add
      </button>
    </form>
  );
}

export default InputField;
