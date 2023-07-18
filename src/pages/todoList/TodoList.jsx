import React,{useState} from 'react';
import './TodoList.css';


const TodoList = () => {
  const [todo,setTodo] = useState('');
  const [userTodo,setUserTodo] = useState([]);

  const addTodo = ()=>{
    if(!todo){
      alert('Please Enter a Todo First!');
    }
    else{
      const todoItem = {id: new Date().toTimeString, name:todo};
      setUserTodo([todoItem,...userTodo]);
      setTodo('');
    }
  }

  const deleteTodo = (id)=>{
    const updatedList = userTodo.filter((item,index)=>{ return index!==id})
    setUserTodo(updatedList);
  }

  const removeAll = () => {
    setUserTodo([]);
    console.log('remove all');
  }

  return (
    <div className='todoContainer'>
      <h1>My Todos</h1>
      <form onSubmit={(e) =>{e.preventDefault();}}>
        <div className='addTodo'>
          <label htmlFor="todo">Enter your Todo</label>
          <input type='text' id='todo' name='todo' value={todo} onChange={(e) => {setTodo(e.target.value)}} />

          <button onClick={addTodo}>Add Todo</button>
        </div>
      </form>

      <div className='todoList'>
        {userTodo.map((item,index)=>{
          return (
            <div key={index} className='todoListCard' >
              <div>
                {item.name}
              </div>
                
              <div>
                <button className='editBtn'>
                  Edit
                </button>
                <button className='childBtn'>
                  Child
                </button>
                <button className='dltBtn' onClick={()=> deleteTodo(index)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button className='remAllBtn' onClick={removeAll} disabled={!userTodo}>Remove All</button>
      </div>
    </div>
  )
}

export default TodoList;