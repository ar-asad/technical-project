import React from 'react';
import useFetchData from '../Hooks/useFetchData';

const MangeExplore = () => {
    const [datas] = useFetchData();
    if (!datas) {
        return <p>loading....</p>
    }
    const tasks = datas.tasks[0]
    return (
        <div style={{ backgroundColor: '#f0eee9', marginTop: '40px', marginBottom: '60px' }} className='container p-4'>
            <h5 className='fw-bold'>{tasks.task_title}</h5>
            <p>{tasks.task_description}</p>
        </div>
    );
};

export default MangeExplore;