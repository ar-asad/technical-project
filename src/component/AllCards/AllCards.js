import React from 'react';
import MethodCard from '../MethodCard/MethodCard';
import StructureCard from '../StructureCard/StructureCard';
import TechnicalCard from '../TechnicalCard/TechnicalCard';
import ThreadCard from '../ThreadCard/ThreadCard';

const AllCards = () => {
    return (
        <div className='container'>
            <div className=' row row-cols-1 row-cols-md-2 g-5'>
                <TechnicalCard></TechnicalCard>
                <ThreadCard></ThreadCard>
                <StructureCard></StructureCard>
                <MethodCard></MethodCard>
            </div>
        </div>
    );
};

export default AllCards;