import {Button, Col, Container, Dropdown, DropdownButton, Row} from "react-bootstrap";
import Poster from "../components/poster";
import React, {useEffect, useState} from "react";
import {getEvents} from "../podo/events";
import {LinkContainer} from "react-router-bootstrap";
import LoadingScreen from "../components/LoadingScreen";


export default function EventsScreen() {
    const [events, setEvents] = useState(null);
    useEffect(() => {
        // setEvents(Events())
        getEvents().then((successObj) => {
            if (successObj.success){
                setEvents(successObj.data)
            }
        })
    }, [])
    if (events === null) {
        return (<LoadingScreen className={'h-100'}/>)
    } else
        return (<Container fluid className={'py-3 h-100'}>
        <div className={'d-flex flex-row justify-content-between mb-3'}>
            <h4 className={'text-primary'}>Events</h4>
            <div className={'d-flex'}>
            <DropdownButton title={'Sort'} variant={'outline-primary'} >
                <Dropdown.Item>Name</Dropdown.Item>
                <Dropdown.Item>Price</Dropdown.Item>
                <Dropdown.Item>Date</Dropdown.Item>
            </DropdownButton>
                <LinkContainer to={'/events/new'}>
                    <Button variant={'outline-primary'} className={'ms-2'}>Create</Button>
                </LinkContainer>
            </div>
        </div>
        <Row className={'gy-3'}>
            {events.map((event, index) => (<Col key={index}  md={'4'}><Poster eventDetails={event}/></Col>))}
        </Row>
    </Container>)
}