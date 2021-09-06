import useState from 'React';
import TodoItem from './components/TodoItem';
import './App.css';

//App sample using TodoItem

function App() {

  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <TodoItem task={"Buy Pizza"}/>
      {JSON.stringify(items)}
    </div>
  );
}

export default App;
