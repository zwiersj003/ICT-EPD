import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Button, Col, Row, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class PersonalData extends Component {

    render() {
        return (
            <Card>
                <CardHeader>
                    <i className="cui-user"></i> Persoonsgegevens
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col md="3">
                            <img src="/../../../assets/img/avatars/6.jpg"/>
                        </Col>
                        <Col md="9">
                            <div>
                                    <p><b>Naam:</b> Robby Michels </p> 
                                    <p><b>Straatnaam: </b> Wibautstraat 1</p>
                                    <p><b>Woonplaats: </b> Amsterdam</p>
                                    <p><b>Geboortedatum: </b> 05-12-1991</p>
                                    <p><b>BSN: </b> 5123455322</p>
                                    <p><b>Email: </b> robby.michels@hva.nl</p>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }
}

export default PersonalData