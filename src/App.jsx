import { useState } from 'react'
import './App.css'
import List from './components/List'
import AddItem from './components/AddItem'

const state = [
  {text: 'fare la spesa', id: 1, done: false },
  {text: 'ascoltare musica', id: 2, done: true },
  {text: 'comprare la droga', id: 3, done: false },
]

function App() {
  const [todos, setTodos] = useState(state);

  function addItem(text) {
    setTodos([...todos, {id: Math.random.toString(), text, done: false}]);
  }

  function toggleItem(id) {
      setTodos(todos.map(t => t.id === id ? {...t, done: !t.done} : t));
  }

  function deleteItem(id) {
    setTodos(todos.filter(t => t.id !== id));
}

  return (
    <div className="container m-4">
      <AddItem add={addItem} />
      <List todos={todos} toggleItem={toggleItem} deleteItem={deleteItem} />
    </div>
  )
}

export default App
