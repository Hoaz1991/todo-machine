import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
// localStorage.removeItem('TODOS_V1')

// const defaultTodos=[
//   {text:'Estudiar',completed:true},
//   {text:'Trabajar',completed:false},
//   {text:'Ejercicio',completed:false},
//   {text:'Dormir',completed:false},
//   {text:'Programar',completed:true},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
  const {item:todos, saveItem: saveTodos,loading, error} = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  console.log('Log1')

  // React.useEffect(()=>{
  //   console.log('Log2 encapsulado')
  // })

  // React.useEffect(()=>{
  //   console.log('Log2 encapsulado')
  // }, [])

  React.useEffect(()=>{
    console.log('Log2 encapsulado')
  }, [totalTodos])

  console.log('Log3')

  

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return(
    <AppUI
    loading={loading}
    error={error}
    completedTodos ={completedTodos}
    totalTodos ={totalTodos}
    searchValue ={searchValue}
    setSearchValue ={setSearchValue}
    searchedTodos ={searchedTodos}
    completeTodo ={completeTodo}
    deleteTodo ={deleteTodo}
    />
  )
}

export default App;