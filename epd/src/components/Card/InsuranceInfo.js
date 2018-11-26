import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Button, Col, Row, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class InsuranceInfoCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {usersObject} = this.props
        console.log(usersObject)
        return(
            <Card>
                <CardHeader>
                    <i className="fa fa-info-circle"></i> Zorgverzekering Informatie
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col md="6">
                            <p><b>Zorgverzekering: </b> {usersObject.verzekering[0].zorgverzekering}</p>
                            <p><b>Dekking: </b> {usersObject.verzekering[0].dekking}</p>
                            <p><b>Website: </b> {usersObject.verzekering[0].website}</p>
                            <p><b>Telefoonnummer: </b> {usersObject.verzekering[0].telefoon}</p>
                        </Col>
                        <Col md="6">
                            <img src="/../../../assets/img/avatars/zorgpas_achterkant.png" />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }
}

export default InsuranceInfoCard