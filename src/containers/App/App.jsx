import React from 'react'
import TaskCounter from '../../components/TaskCounter/TaskCounter'
import TaskItem from '../../components/TaskItem/TaskItem';
import TaskList from '../../components/TaskList/TaskList'
import Header from '../../components/Header/Header'
import { useTasks } from '../../hooks';


function App() {
  const {
      taskCompleted,
      totalTask,
      searchedTask,
      onComplete,
      onDelete,
  } = useTasks();

  return (
    <>
      <Header/>

      <TaskCounter
            taskCompleted={taskCompleted}
            totalTask={totalTask}/>
        <TaskList
         searchedTask={searchedTask}
         totalTask={totalTask}
         render={task =>
          <TaskItem text={task.text} 
                    key={task.text}
                    slug={task.id}
                    completed={task.completed}
                    onComplete={() => onComplete(task.id)}
                    onDelete={() => onDelete(task.id)}
                    
          />}
         />
    </>
  );
}

export default App;

