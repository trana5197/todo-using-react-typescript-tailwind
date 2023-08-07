interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
}

function InputField({ todo, setTodo }: Props) {
  return (
    <form className="mt-10 relative">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="h-10 w-96 rounded-full px-4 py-7 focus:outline-none focus:ring focus:ring-stone-900 focus:ring-offset-5"
        placeholder="Enter a task"
      />
      <button
        className="text-stone-100 absolute right-3 top-1.5 bg-blue-500 rounded-full p-3 focus:outline-none focus:ring focus:ring-stone-900 focus:ring-offset-2 hover:bg-blue-700 active:scale-50  transition-all"
        type="submit"
      >
        Go
      </button>
    </form>
  );
}

export default InputField;
