import React from 'react';
import StatusPanel from "./StatusPanel/StatusPanel";
import SearchPanel from  './SearchPanel/SearchPanel'

const Panel = ({todos, status, setStatus, search, setSearch}) => {
    return (
        <div className='d-flex justify-content-between mb-3'>
           <StatusPanel todos={todos} status={status} setStatus={setStatus} />
           <SearchPanel search={search} setSearch={setSearch}/>
        </div>
    );
};

export default Panel;