import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";


    function TodoForm(){
        const {
            AddTodo,
            setOpenModal,
        } = React.useContext(TodoContext);
        const [newTodoValue, setNewTodoValue] = React.useState('')

    

const onSubmit = (event) =>{
    event.preventDefault()
    setOpenModal(false)
    AddTodo(newTodoValue)
}

const onCancel = () =>{
    setOpenModal(false)
}
const onChange = (event) =>{
    setNewTodoValue(event.target.value)
}


    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
            placeholder="Un ejemplo de tarea" 
            value={newTodoValue}
            onChange={onChange}
            />
            
            
            <div className="TodoForm-buttonContainer">
            <button
            type="button"
            className="TodoForm-button 
            TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
            <button
            type=""
            className="TodoForm-button 
            TodoForm-button--add">Añadir</button>
            </div>
        
        </form>
    )
    }

    export {TodoForm};