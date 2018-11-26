import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Button, Col, Row, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class PersonalData extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        let {usersObject} = this.props

        return (
         <div className="personalData">
                <Card>
                    <CardHeader>
                        <i className="fa fa-user"></i> Persoonsgegevens
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md="3">
                                <img src="/../../../assets/img/avatars/6.jpg"/>
                            </Col>
                            <Col md="9">
                                <div>
                                    <p><b>Naam:</b> {usersObject.name} </p> 
                                    <p><b>Straatnaam: </b> {usersObject.street} </p>
                                    <p><b>Woonplaats: </b> {usersObject.city} </p>
                                    <p><b>Geboortedatum: </b> {usersObject.dateOfBirth} </p>
                                    <p><b>BSN: </b> {usersObject.bsn} </p>
                                    <p><b>Email: </b> {usersObject.email} </p>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
</div>
        )
    }
}

export default PersonalData