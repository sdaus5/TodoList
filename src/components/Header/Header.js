import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
const Header = ({todos}) => {
    const moreCount = todos.filter(el => el.isActive && !el.isDeleted).length
    const doneCount = todos.filter(el => !el.isActive && !el.isDeleted).length
    return (
        <header className='header d-flex justify-content-between'>
            <h1 className='todoList'>Anime-List</h1>
            <span className='todoSpan'>{moreCount} more, {doneCount} done</span>
        </header>
    );
};

export default Header;