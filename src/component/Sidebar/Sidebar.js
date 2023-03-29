import React from 'react';
import { RxCross1 } from "react-icons/rx";

const Sidebar = () => {
    return (
        <div className='position-absolute end-0 d-flex '>
            <div className='d-flex justify-content-center align-items-center flex-column text-white bg-dark p-2 rounded-start'>
                <RxCross1 style={{ marginBottom: '8px' }} />
                <span>N</span>
                <span>o</span>
                <span>t</span>
                <span>i</span>
                <span>c</span>
                <span>e</span><br />
                <span>B</span>
                <span>o</span>
                <span>a</span>
                <span>r</span>
                <span>d</span>
            </div>
            <div style={{ width: '20px', backgroundColor: '#ededed' }}></div>
        </div>
    );
};

export default Sidebar;