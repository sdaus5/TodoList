import React from 'react';

const StatusPanel = ({setStatus, status}) => {
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div>
            <button type='button' className={`btn btn-outline-secondary me-1 ${status === 'all' ? 'active' : ''}`} value='all' onClick={statusHandler}>All</button>
            <button type='button' className={`btn btn-outline-success me-1 ${status === 'active' ? 'active' : ''}`} value='active' onClick={statusHandler}>Active</button>
            <button type='button' className={`btn btn-outline-primary me-1 ${status === 'done' ? 'active' : ''}`} value='done' onClick={statusHandler}>Done</button>
        </div>
    );
};

export default StatusPanel;