import React from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import MethodCard from '../MethodCard/MethodCard';
import StructureCard from '../StructureCard/StructureCard';
import TechnicalCard from '../TechnicalCard/TechnicalCard';
import ThreadCard from '../ThreadCard/ThreadCard';
import './AllCards.css';

const AllCards = () => {
    return (
        <div className='container main-container'>
            {/* <Row xs={1} md={2} className="g-4"> */}
            {/* <CardGroup> */}
            {/* <Row> */}
            <TechnicalCard></TechnicalCard>
            <ThreadCard></ThreadCard>
            <StructureCard></StructureCard>
            <MethodCard></MethodCard>
            {/* </CardGroup> */}
            {/* </Row> */}
            {/* </Row> */}
        </div>
    );
};

export default AllCards;