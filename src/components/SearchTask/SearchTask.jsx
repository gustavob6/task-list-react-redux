import React from "react";
import { useDispatch } from "react-redux";
import { setSearched } from "../../reducers/reducerTask";
import './SearchTask.css';

function SearchTask(){
    const dispatch = useDispatch();
    const onChangeValue = (event) => {
        dispatch(setSearched(event.target.value))
    }

    return(
            <input 
            className="prompt" 
            placeholder='Search Task...'
            onChange={onChangeValue}  
            />
    );
}

export default SearchTask;