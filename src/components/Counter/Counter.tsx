import React from 'react';
import useCounter from './useCounter';
import CounterLabel from './CounterLabel';

const Counter = () => {
    const { counterNumber, handleButtonClick } = useCounter();

    return (
        <div>
            <button onClick={handleButtonClick}>Click</button>
            <CounterLabel counterNumber={counterNumber} />
        </div>
    );
};

export default Counter;
