import './counter.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const toDisplay = useSelector((state) => state.counter.displayInc)
    const dispatch = useDispatch()
    return (
        <div className="App">
            <header className="Counter-body">
                <span style={{ fontWeight: 600 }}>Counter : <span style={{ color: '#ff8a1e' }}>{count}</span></span>
                <div className="Counter-buttons">
                    {toDisplay ?
                        <button className="Counter-button w3-animate-zoom" onClick={() => { dispatch(increment()) }}>
                            Increment
                        </button> : null
                    }
                    <button className="Counter-button w3-animate-zoom" onClick={() => { dispatch(decrement()) }}>
                        Decrement
                    </button>
                </div>
            </header>
        </div>
    );
};
