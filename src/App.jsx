import './App.css'
import List from './components/List'
import AddItem from './components/AddItem'
import axios from 'axios';
import Spinner from './components/Spinner';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const todoUrl = 'http://localhost:3000/todos';

function App() {
  const queryClient = useQueryClient();

  const {data: todos, isPending: wait} = useQuery({
    queryKey: ['todos'],
    initialData: [],
    queryFn: async () => {
      const res = await axios.get(todoUrl);
      return res.data;
    }
  });

  const refresh = () => queryClient.invalidateQueries({queryKey: ['todos']});

  const {mutate: addItem} = useMutation({
    mutationFn: async (text) => await axios.post(todoUrl, {text, done: false}),
    onSuccess: refresh
  });

  const {mutate: toggleItem} = useMutation({
    mutationFn: async (id) => {
      const toUpdate = todos.find(t => t.id === id);
      toUpdate.done = !toUpdate.done;
      await axios.put(todoUrl + '/' + id, toUpdate);
    },
    onSuccess: refresh
  });

  const {mutate: deleteItem} = useMutation({
    mutationFn: async (id) => await axios.delete(todoUrl + '/' + id),
    onSuccess: refresh
  });

  return (
    <div className="container m-4">
      <AddItem add={addItem} />
      {wait && <Spinner/>}
      <List todos={todos} toggleItem={toggleItem} deleteItem={deleteItem} />
    </div>
  )
}

export default App
