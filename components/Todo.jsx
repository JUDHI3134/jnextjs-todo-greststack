import React from "react";

const Todo = ({title, description, isCompleted,id, mongoId,deleteTodo,updateTodo}) => {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {id}
        </th>
        <td className={`px-2 py-1 ${isCompleted ? "line-through":""}`}>{title}</td>
        <td className={`px-2 py-1 ${isCompleted ? "line-through":""}`}>{description}</td>
        <td className="px-2 py-1">{isCompleted? "Completed":"Pending"}</td>
        <td className="px-2 py-1 flex gap-2">
            <button onClick={()=>deleteTodo(mongoId)} className="bg-red-500 rounded text-white px-2 py-1">Delete</button>

            {isCompleted ? "":<button onClick={()=>updateTodo(mongoId)} className="bg-emerald-500 rounded text-white px-2 py-1">Done</button>}
        </td>
      </tr>
    </>
  );
};

export default Todo;
