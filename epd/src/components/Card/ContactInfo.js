import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Button, Col, Row, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class ContactInfoCard extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        let {usersObject} = this.props

        return (
            <Card>
                <CardHeader>
                    <i className="fa fa-phone"></i> Contact Informatie
                </CardHeader>
                {/* try to access the information off personalData.js */}
                <CardBody>
                    <p><b>Telefoon: </b> {usersObject.telefoon}</p>
                    <p><b>(Prive) Telefoon: </b> {usersObject.telefoon}}</p>
                    <p><b>Email: </b> {usersObject.email}</p>
                </CardBody>
            </Card>
        )
    }

}

export default ContactInfoCard