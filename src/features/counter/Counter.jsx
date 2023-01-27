import './counter.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className="App">
            <header className="Counter-body">
                <span style={{ fontWeight: 600 }}>Counter : <span style={{ color: '#ff8a1e' }}>{count}</span></span>
                <div className="Counter-buttons">
                    <button className="Counter-button w3-animate-zoom" onClick={() => { dispatch(increment()) }}>
                        Increment
                    </button>
                    <button className="Counter-button w3-animate-zoom" onClick={() => { dispatch(decrement()) }}>
                        Decrement
                    </button>
                </div>
            </header>
        </div>
    );
};
