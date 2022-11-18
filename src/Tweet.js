import React, { useState } from "react";


const Tweet = ({text, date, author}) => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrease = () => {
        setCounter( counter - 1 );
    }
    
    return (
        <div>
            <h1>counter: {counter}</h1>
            <h3>{text}</h3>
            <p>{author}</p>
            <p>{date}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
};

export default Tweet;