import { useState } from 'react';
import '../css/counter.css';
function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert('不能再减了');
        }
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="counter-container">
            <div className="counter-display">点击次数：{count}</div>
            <div className="button-group">
                <button className="button" onClick={increment}>+1</button>
                <button className="button" onClick={decrement}>-1</button>
                <button className="button" onClick={reset}>重置</button>
            </div>
        </div>
    );
}
export default Counter;