import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import MedicationTable from '../../../components/Table/MedicationTable';

class Afspraken extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <div className="medication">
                    <Row>
                        <Col sm="6">
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-heartbeat"></i> Medicijn
                                </CardHeader>
                                <CardBody>
                                    <MedicationTable/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-heartbeat"></i> Historie
                                </CardHeader>
                                <CardBody>
                                    <MedicationTable/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Afspraken