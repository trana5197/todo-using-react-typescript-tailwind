import { useState } from "react";
import InputField from "./ui/InputField";

function App() {
  const [todo, setTodo] = useState<string | number>("");

  return (
    <div className="bg-blue-500 h-screen text-center flex flex-col items-center">
      <span className="text-4xl text-stone-50 uppercase z-1 mt-10 md:mt-20 md:text-6xl">
        Taskify
      </span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
