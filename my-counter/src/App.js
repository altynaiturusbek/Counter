
import  Button from './components/Button';
import { Counter } from './components/counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter count='0'/>
      <Button title='+'/>
      <Button title='-'/>
    </div>
  );
}

export default App;
