import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Button, Col, Row, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class ContactInfoCard extends Component {

    render() {
        return (
            <Card>
                <CardHeader>
                    <i className="fa fa-phone"></i> Contact Informatie
                </CardHeader>
                <CardBody>
                    <p><b>Telefoon: </b> 06 51 51 51 51</p>
                    <p><b>(Prive) Telefoon: </b> 06 51 51 51 51</p>
                    <p><b>Email: </b> Robby.Michels@hva.nl</p>
                </CardBody>
            </Card>
        )
    }

}

export default ContactInfoCard