import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const SearchPanel = ({search, setSearch}) => {
    const serachHandler = (e) => {
        setSearch(e.target.value)
    }
    return (
            <form className='d-flex'>
                <input type='text' placeholder='Search todo' onChange={serachHandler} className='searchInput'/>
                <button type='submit' className='btn btn-outline-dark loop'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </form>
    );
};

export default SearchPanel;