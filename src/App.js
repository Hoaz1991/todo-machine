import React from 'react';
import{TodoCounter}from './TodoCounter';
import{TodoSearch}from './TodoSearch';
import{TodoList}from './TodoList';
import{TodoItem}from './TodoItem';
import{CreateTodoButton}from './CreateTodoButton';
const defaultTodos=[
  {text:'Estudiar',completed:true},
  {text:'Trabajar',completed:false},
  {text:'Ejercicio',completed:false},
  {text:'Dormir',completed:false},
];
function App(){
  return(
  <>
  <TodoCounter completed={1}total={5}/><TodoSearch/>
  <TodoList>{defaultTodos.map(todo=>(
    <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>))}
  </TodoList>
  <CreateTodoButton/>
  </>
  );}
  export default App;