import { TodoList } from "../Types/Todo.types";

type TodoTableProp = {
  todos: TodoList;
  onToggle: (todoId: string) => void;
  onChange: (todoId: string) => void;
  onDelete: (todoId: string) => void;
};

const TodoTable = ({ todos, onToggle, onChange, onDelete }: TodoTableProp) => {
  return (
    <table className=" w-full table-fixed">
      <thead className=" border-t border-gray-100 bg-gray-50">
        <th scope="col" className=" w-1/6 py-4">
          완료
        </th>
        <th scope="col" className=" w-1/2 py-4 text-left">
          할일
        </th>
        <th scope="col" className=" w-1/6 py-4">
          수정
        </th>
        <th scope="col" className=" w-1/6 py-4">
          삭제
        </th>
      </thead>
      <tbody>
        {todos.length === 0 ? (
          <tr className=" border-b border-gray-100 text-center">
            <td className=" py-3 text-sm text-gray-600" colSpan={4}>
              첫 할일을 추가해보세요🥳
            </td>
          </tr>
        ) : (
          todos.map(({ id, completed, title }) => (
            <tr className="border-b border-gray-100" data-todo-id={id}>
              <td className=" py-3 text-center">{completed ? "O" : "X"}</td>
              <td className=" py-3" onClick={() => onToggle(id)}>
                {title}
              </td>
              <td className=" py-3 text-center">
                <button
                  className="w-fit rounded-lg bg-gray-100 px-4 py-1 font-bold"
                  onClick={() => onChange(id)}
                >
                  📝
                </button>
              </td>
              <td className=" py-3 text-center">
                <button
                  className="w-fit rounded-lg bg-gray-100 px-4 py-1 font-bold"
                  onClick={() => onDelete(id)}
                >
                  ❌
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TodoTable;
