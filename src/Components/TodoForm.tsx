import React, { useState } from "react";

type TodoFormProps = {
  onSubmit: (todoInput: string) => void;
};

const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    onSubmit(todoInput);
    setTodoInput("");
  };

  return (
    <form
      className="mb-4 flex h-10 overflow-hidden rounded-lg border border-gray-200"
      onSubmit={handleSubmit}
    >
      <input
        className=" h-full w-full appearance-none bg-none px-2 py-1 outline-none"
        value={todoInput}
        placeholder="할일을 적어보아요✨"
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        className=" h-ull min-w-fit appearance-none rounded-sm bg-gray-100 bg-none px-4 py-1 font-bold uppercase outline-none"
        type="submit"
      >
        추가
      </button>
    </form>
  );
};

export default TodoForm;
