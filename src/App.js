import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [todo, setTodo] = React.useState({
    name: "",
    description: "",
    quantity: "",
  })
  const [todoList, setList] = React.useState([])

  function onsubmitHandler(e) {
    e.preventDefault()
    const AddTodo = {
      id: new Date().getTime(),
      todoName: todo.name,
      description: todo.description,
      dueDate: todo.quantity,
      complete: false
    }
    setList([...todoList].concat(AddTodo))
    setTodo("")
    console.log(todoList);
  }
  function deleteTodo(id) {
    let updatedList = [...todoList].filter((todo) => todo.id !== id)
    setList(updatedList)

  }

  function completeTodo(id) {
    let updatedList = [...todoList].map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
      return todo
    })
    setList(updatedList)
    console.log(todoList);
  }

  return (
    <div className="todo">
      <h1> Add New Item  </h1>
      <form onSubmit={onsubmitHandler}>
        <label>Name</label>

        <input
          type="text"
          value={todo.name}
          Name="name"
          placeholder="Enter Name "
          required
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        />
        <label>Description</label>
        <input
          type="text"
          value={todo.description}
          name="description"
          placeholder="Description"
          required
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}

        />
        <label>Quantity</label>
        <input
          type="text"
          name="quantity"
          value={todo.quantity}
          placeholder="0"
          required
          onChange={(e) => setTodo({ ...todo, quantity: e.target.value })}
        />

        <button> Add to list</button>
      </form>
<h1>Shopping list</h1>
      {todoList.map((data) => (
        <div key={data.id} className="list-style">


          <div className="button-style">

            <div className="todo-style">
              {data.name}
              {data.description}
              {data.quantity}
            </div>

            <button onClick={() => deleteTodo(data.id)}>Delete</button>
            {data.complete === true
              ? <button className="complete" onClick={() => completeTodo(data.id)}>completed</button>
              : <button onClick={() => completeTodo(data.id)}>Complete</button>
            }
          </div>
        </div>
      ))}

    </div>
  );
}

export default App;
