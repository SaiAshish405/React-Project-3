import React, { useEffect, useRef, useState } from 'react';
import "./Todo.css"

function Todo() {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const AddHandler = () => {
        const todo = inputRef.current.value.trim();
        if (todo !== '') {
            setTodos([...todos, todo]);
            inputRef.current.value = '';
            inputRef.current.focus();
        } else {
            inputRef.current.focus();
            alert("Write Something to add.");
        }
    };

    const DeleteHandler = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className='container'>
            <h1>TODO's</h1>
            <div className='input-container'>
                <input type='text' ref={inputRef} className='input' />
                <button onClick={AddHandler} className='AddButton'>Add</button>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Todo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{todo}</td>
                            <td>
                                <button onClick={() => DeleteHandler(index)} className='DeleteButton'>delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Todo;
