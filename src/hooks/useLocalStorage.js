import React,{useEffect}  from "react";
import { setLoading,setTasks } from "../reducers/reducerTask";
import { useDispatch } from "react-redux";

function useLocalStorage(itemName) {
    const dispatch = useDispatch();

    useEffect(() => {
      setTimeout(()=>{
        const localStorageTask = localStorage.getItem(itemName);

        let tasks = [];
  
      if(!localStorageTask){
        localStorage.setItem(itemName,JSON.stringify(tasks));
      }
      else
      {
        tasks = JSON.parse(localStorageTask);
      }
      dispatch(setLoading(false));
      dispatch(setTasks(tasks))
      console.log("Actualize El estado Por primera vez");
      },2000);
    },[]);

    const saveTask = (tasks) => {
      let items = JSON.stringify(tasks);
      localStorage.setItem(itemName,items)
      dispatch(setTasks(tasks));
      console.log("Añadiendo Nueva Tarea");
    }

    return {
      saveTask,
    }
  }
  
  export {useLocalStorage};

  