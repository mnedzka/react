import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p className='p-style'>TEST 1 {props.username}</p>
            <p>Test 2 {props.name}</p>
        </div>    
    )
};

export default UserOutput;