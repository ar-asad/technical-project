import React from 'react';
import MethodCard from '../MethodCard/MethodCard';
import StructureCard from '../StructureCard/StructureCard';
import TechnicalCard from '../TechnicalCard/TechnicalCard';
import ThreadCard from '../ThreadCard/ThreadCard';
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import './AllCards.css';
import useFetchData from '../Hooks/useFetchData';

const AllCards = () => {
    const [datas] = useFetchData();
    if (!datas) {
        return <p>loading....</p>
    }
    const assets = datas.tasks[0].assets

    const style = { fontSize: "60px" }
    return (
        <div className='container mb-5 position-relative '>
            <div className=' main-container'>
                <TechnicalCard data={assets[0]} ></TechnicalCard>
                <ThreadCard></ThreadCard>
                <StructureCard></StructureCard>
                <MethodCard></MethodCard>
            </div>
            <div style={{ bottom: '-100px', right: '-70px' }} className='d-flex flex-column position-absolute gap-3 '>
                <BsFillQuestionSquareFill className='text-primary' style={style} />
                <HiUserGroup className='text-primary' style={style} />
                <FaCalendarAlt className='text-primary' style={style} />
            </div>
        </div>
    );
};

export default AllCards;