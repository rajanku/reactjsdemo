import React from 'react';

export default ({list, _delete, _update}) => {
    return (<ul>
        {
            list.map((value, index) => 
         
            <li key={index}>{value} <button onClick={() => _delete(index)}>Delete</button> <button onClick={() => _update(index)}>Update</button></li>
        
    )}
    </ul>);
};