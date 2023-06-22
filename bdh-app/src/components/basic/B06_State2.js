import React, { useState } from 'react';



const State2 = () => {
    
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>{count}</p>
            <button onClick={ ()=> setCount(count + 1)}>click</button>
        </div>
    );
}

export default State2;