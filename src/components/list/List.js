import React, {useState} from 'react'

function List({tasks, deleteItem, changeBg, change}) {
    

    
    return (
        <div>
            <div>
            {tasks.map((item) =>
                <div  className={item.isDone ? "bg-success":"bg-warning"} key={item.id}>
                    <ul >
                        <li>{item.text}</li>
                        <li>{item.day}</li>
                        <li>{item.category}</li>
                    </ul>
                    <button onClick={()=>deleteItem(item.id)}><i className="fas fa-trash"></i> </button>
                    <button onClick={() =>changeBg(item.id)}><i className={item.isDone ? "fas fa-times":"fas fa-check"}></i></button>
                    
                </div>
            )}
            </div>
            
        </div>
    )
}

export default List
