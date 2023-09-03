import React from 'react'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import './TaskCounter.css'

function TaskCounter  ({taskCompleted,totalTask}) {
const loading = useSelector(state => state.tasks.loading);
return(
    <div className='task-counter'>
   {totalTask === 0  && 
        <Segment className='counter' placeholder>
            <Header icon>
            <Icon name='search' />
                {loading && <p> Cargando...</p>}
                {!loading && !totalTask &&<p>No tienes Tareas Aun</p>}
            </Header>
            <Segment.Inline>
            <Button primary as={NavLink} to='/new'>Crea tu primera Tarea</Button>
            </Segment.Inline>
        </Segment>
    }
    {totalTask > 0 &&
        <Segment  size='large' className='text counter-2' color='black'>Has completado {taskCompleted} tareas de {totalTask} tareas</Segment>
    }
    </div>
)
}

export default TaskCounter
