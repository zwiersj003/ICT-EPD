import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Button, Col, Row, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class InsuranceInfoCard extends Component {
    render() {
        return(
            <Card>
                <CardHeader>
                    <i className="fa fa-info-circle"></i> Zorgverzekering Informatie
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col md="6">
                            <p><b>Zorgverzekering: </b> CZ</p>
                            <p><b>Dekking: </b> All-Risk</p>
                            <p><b>Website: </b> www.CZ.nl</p>
                            <p><b>Telefoonnummer: </b> 06 12 34 56 78</p>
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