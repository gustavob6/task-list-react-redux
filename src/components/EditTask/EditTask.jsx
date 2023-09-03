import React  from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { useTasks } from '../../hooks';
import './EditTask.css';

function EditTask () {
        const {onEdit} = useTasks();
        const textRef = React.useRef(null)
        const {slug} = useParams();
        const navigate = useNavigate();
        const id = parseInt(slug,10);

        const onEditFunc = () => {
            onEdit(id,textRef.current.value);
            navigate('/');
        }
    
    return(
        <>
        <div className='item'>
            <div className="ui focus input">
                <input type="text" ref={textRef} placeholder='Edit Task...'/>
            </div>
        </div>
        <div className="item-btn">
            <button className="ui primary button" onClick={()=>{
                onEditFunc();
            }}>
                Actualizar Tarea
            </button>
        </div>
        </>
    )
}

export default EditTask