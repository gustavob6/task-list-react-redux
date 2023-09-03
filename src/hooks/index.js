import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import {useSelector } from 'react-redux';

function useTasks ()  {
  const {saveTask:saveTasks} = useLocalStorage('list-task');
  const tasks = useSelector(state => state.tasks.tasks)
  const searched = useSelector(state => state.tasks.searched)
 
  let taskCompleted = tasks.filter(task => !!task.completed).length;
  let totalTask = tasks.length;
  
  let searchedTask = [];
  
  if(searched != ''){
    console.log('Si es mayor');
    searchedTask = tasks.filter(task => {
      let val = searched.toLowerCase();
      let taskText = task.text.toLowerCase();
      return taskText.includes(val);
    })
    }else{
    searchedTask = tasks;
  }
  
  const onComplete = (id) => {
    let taskIndex = tasks.findIndex(task => task.id === id);
    console.log(taskIndex)
    console.log(tasks)
    let aux =  [...tasks];
    aux.splice(taskIndex,1,{text:aux[taskIndex].text,completed:true,id:id})
    console.log(aux)
    saveTasks(aux);
  }

  const onEdit = (id,text) => {
    let taskIndex = tasks.findIndex(task => task.id === id);
    console.log(taskIndex)
    console.log(tasks)
    let aux =  [...tasks];
    aux.splice(taskIndex,1,{text:text,completed:false,id:id})
    console.log(aux)
    saveTasks(aux);
  }

  const onDelete = (id) => {
    let taskIndex = tasks.findIndex(task => task.id === id);
    let auxTask = [...tasks];
    auxTask.splice(taskIndex,1);
    saveTasks(auxTask);
  }

  const addTask = (text) => {
    if(!text)
    {
      console.log('Añade texto')
    }
    else
    {
        let numId = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
        let auxTask = [...tasks];
        let item = {text:text,completed:false,id:numId}
        auxTask.push(item)
        saveTasks(auxTask);
    }
  }

   
  return {
      taskCompleted,
      totalTask,
      searchedTask,
      addTask,
      saveTasks,
      onDelete,
      onComplete,
      onEdit,
  }
}

export {useTasks};