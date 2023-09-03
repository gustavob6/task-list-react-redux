import React from "react";
import { useSelector } from "react-redux";
import { Segment } from "semantic-ui-react";
import './TaskList.css'

function TaskList ({searchedTask,totalTask,render}){
    const loading = useSelector(state => state.tasks.loading);
    const searched = useSelector(state => state.tasks.searched);
    return(
        <section>
             {!!totalTask && !searchedTask.length &&  <div className="cont-search"><Segment className="no-searched" secondary>No se han encontrado resultados para "{searched}"</Segment></div>}
             
            <div>
                {!loading && searchedTask.map(render)}
            </div>
        </section>
    );
}

export default TaskList