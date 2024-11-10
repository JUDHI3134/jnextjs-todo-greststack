"use client"
import Todo from "@/components/Todo";
import axios from "axios";
import { useEffect, useState } from "react";



export default function Home() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  })

  const onChangeHandler = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setFormData(form => ({...form,[name]:value}))
    
    
  }

  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async () =>{
    const response = await axios("/api")
    setTodoData(response.data.todos)
  }

  useEffect(()=>{
    fetchTodos();
  },[])

  const deleteTodo = async (id) =>{
  const response = await axios.delete("/api",{
    params:{
      mongoId:id
    }
  })
  console.log(response.data.message);
  await fetchTodos();
  
  }

  const updateTodo = async (id) =>{
    const response = await axios.put("/api",{},{
      params:{
        mongoId: id
      }
    })
    console.log(response.data.message);
    await fetchTodos();
    
  }
    
  const onSubmitHandler = async (e) =>{
    e.preventDefault();

    try {
      //api code
      const response = await axios.post("/api",formData);
      console.log(response.data.message);
      setFormData({
        title: "",
        description: "",
      })
      
      await fetchTodos();
   
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <>
    
      <form className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input
        onChange={onChangeHandler}
        value={formData.title}
          type="text"
          name="title"
          placeholder="Write your Todo here..."
          className="px-3 py-2 border-2 w-full"
        />
        <textarea
        onChange={onChangeHandler}
        value={formData.description}
          name="description"
          placeholder="Enter Description"
          className="px-3 py-2 border-2 w-full"
        ></textarea>
        <button onClick={onSubmitHandler} className="px-11 py-3 bg-emerald-500 text-white" type="submit">
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto mt-24 w-full sm:w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-2">
                Id
              </th>
              <th scope="col" className="px-4 py-2">
                Title
              </th>
              <th scope="col" className="px-4 py-2">
                Description
              </th>
              <th scope="col" className="px-4 py-2">
                Status
              </th>
              <th scope="col" className="px-4 py-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
           
           {todoData.map((item,index)=>{
            return <Todo key={index} id={index+1} title={item.title} description={item.description} isCompleted = {item.isCompleted} mongoId = {item._id} deleteTodo={deleteTodo} updateTodo={updateTodo} />
           })}
           
        
            
          </tbody>
        </table>
      </div>
    </>
  );
}
