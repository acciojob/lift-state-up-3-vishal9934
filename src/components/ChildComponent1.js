import React from 'react'

function ChildComponent1(props) {
    const {setSelectedOption} = props;
    return (
        <div className='child-1'>
        <h2>Child Component 1</h2>
        <button onClick={(e) => {setSelectedOption(e.target.innerHTML)}}>Option 1</button>
        </div>
    )
}

export default ChildComponent1