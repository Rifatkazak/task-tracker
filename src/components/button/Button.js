import React,{useState} from 'react'
import Form from "../form/Form"
import List from "../list/List"



function Button() {
    const [tasks, setTasks] = useState([{id:0, text:"project", day:"thursday", category:"office", isDone:false }])
    const [isValid, setIsValid] = useState(true)
    const [change,setChange] = useState(false)

  

    const changeBg = (id) => 
        setTasks(tasks.map((task) => 
                task.id === id ? {...task, isDone: !task.isDone} : task
    )
  );
    
    const toggle = () =>{
        setIsValid(!isValid)
    }
    const show = "Show Create a Task Bar";
    const hide = "Hide Create a Task Bar";

    const deleteItem = (itemId) =>{
        let filtered = tasks.filter((item) =>{
            return (item.id !== itemId)
        })
        setTasks(filtered)
    }


    return (
        <div>
            <button onClick={toggle}>{isValid ? show: hide} </button>
            {!isValid && <Form tasks = {tasks} setTasks={setTasks} />}
            <List deleteItem={deleteItem} tasks={tasks} setTasks={setTasks} change={change} changeBg = {changeBg} />

        </div>
        
    )
}

export default Button
