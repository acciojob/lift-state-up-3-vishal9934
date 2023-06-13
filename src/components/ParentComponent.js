import React, { useState } from 'react'
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

function ParentComponent() {
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div className='parent'>
            <h1>Parent Component</h1>
            <ChildComponent1 setSelectedOption={setSelectedOption} />
            <ChildComponent2 setSelectedOption={setSelectedOption} />
            <p>Selected Option: {selectedOption}</p>
        </div>
    )
}

export default ParentComponent