import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <span>Counter : {count}</span>
        <div className="App-buttons">
          <button className="App-button" onClick={() => { dispatch(increment()) }}>
            Increment
          </button>
          <button className="App-button" onClick={() => { dispatch(decrement()) }}>
            Decrement
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
