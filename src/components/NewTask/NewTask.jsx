import React  from 'react';
import { useTasks } from '../../hooks';
import { useNavigate } from "react-router-dom";
import './NewTask.css';

function NewTask () {
    const {addTask} = useTasks();
    const textRef = React.useRef(null)
    const navigate = useNavigate();

    const createTask = () => {
        addTask(textRef.current.value);
        navigate('/');
    }

    return(
        <>
        <div className='item'>
            <div className="ui focus input">
                <input type="text" ref={textRef} placeholder="Nueva Task..."/>
            </div>
        </div>
        <div className="item-btn">
            <button className="ui primary button" onClick={()=>{
                createTask();
            }}>
                Agregar
            </button>
        </div>
        </>
    )
}

export default NewTask