import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncriment = () => {
        setCount((count) => count + 1);
    }
    const handleDecriment = () => {
        setCount((count) => count - 1);
    }
    return (
        <div>
            <h1>Hello</h1>
            <h2>Count: {count}</h2>
            <button onClick={handleIncriment}>Incriment</button><button onClick={handleDecriment}>Decriment</button>
        </div>
    );
};

export default Counter;