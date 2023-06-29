import React, { useState } from 'react';

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('One Punch')
    const onInputChage =({target})=>{
        console.log(target.value);
        setinputValue(target.value);
    }
    const onSubmit =(event) =>{
        event.preventDefault();
        console.log(inputValue)
    }
  return (
    <form onSubmit={(event)=> onSubmit(event)}>
        <input
        type="text"
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={onInputChage}

    />
    </form>
    
  )
}
