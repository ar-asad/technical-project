import React from 'react';
import { BsLightbulbFill, BsFillQuestionSquareFill } from "react-icons/bs";
import { MdMessage } from "react-icons/md";
import { GiThreeLeaves } from "react-icons/gi";

const ThreadSelect = () => {
    return (
        <div className='mt-4 d-flex align-items-center justify-content-end g-2'>
            <div className='d-flex gap-3 me-4'>
                <BsLightbulbFill />
                <MdMessage></MdMessage>
                <BsFillQuestionSquareFill />
                <GiThreeLeaves />
            </div>
            <div className='d-flex gap-3'>
                <select class="form-select border-0 shadow fw-bold" aria-label="Default select example">
                    <option className='fw-bold' selected>Select Categ</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select border-0 shadow fw-bold" aria-label="Default select example">
                    <option selected>Select Proces</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
    );
};

export default ThreadSelect;