import TodoItem from './components/TodoItem';
import './App.css';

//App sample using TodoItem

function App() {

  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <TodoItem task={"Buy Pizza"}/>
    </div>
  );
}

export default App;
