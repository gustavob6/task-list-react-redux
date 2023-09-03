import React from 'react';
import { Icon,Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { GREEN_COLOR,DEFAULT_COLOR } from '../../utils/colors';
import  './TaskItem.css'

function TaskItem({text,slug,completed,onDelete,onComplete}){ 
    const navigate = useNavigate();
    const color = completed ? GREEN_COLOR:DEFAULT_COLOR;
    
    const toEdit = () => {
        navigate(`/edit/${slug}`);
    }

    return(
        <li className={"taskItem"}>
             <Segment className="item-task" size='large' color={color}>
                <div onClick={onComplete}>
                <Icon className='complete' name='check'/>
                </div>
                <p className={"text1"}>
                    {text}
                </p>
               
                <div className='item-btns'>
                    <div onClick={toEdit}>
                        <Icon className='edit' name='edit outline'/>
                    </div>
                    
                    <div onClick={onDelete}>
                     <Icon className='delete' name='trash'/>
                    </div>
                </div>
             </Segment>
        </li>
    );
}
export default TaskItem;