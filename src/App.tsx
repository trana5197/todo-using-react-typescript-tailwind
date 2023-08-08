import InputField from "./InputField";
import TodoLists from "./TodoLists";

function App() {
  return (
    <div className="text-center pt-10 bg-stone-300 h-screen">
      <span className="text-3xl">Todo-List</span>
      <InputField />
      <TodoLists />
    </div>
  );
}

export default App;
