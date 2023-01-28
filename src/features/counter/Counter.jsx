import './counter.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
export default function Counter() {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        <div className="App">
            <header className="Counter-body">
                <span style={{ color: '#ff8a1e' }}>{counter.value}</span>
                <div className="Counter-buttons">
                    {counter.displayInc ?
                        <button className="Counter-button w3-animate-zoom" onClick={() => { dispatch(increment()) }}>
                            Increment
                        </button> : null
                    }
                    {!counter.displayInc ?
                        <button className="Counter-button w3-animate-zoom" onClick={() => { dispatch(decrement()) }}>
                            Decrement
                        </button> : null
                    }
                </div>
            </header>
        </div>
    );
};
