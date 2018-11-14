import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import AppointmentTable from '../../../components/Table/AppointmentTable';

class Afspraken extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <div className="appointments">
                    <Row>
                        <Col sm="3">
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-filter"></i> Filters
                                </CardHeader>
                                <CardBody>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="9">
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-calendar-o"></i> Afspraken
                                </CardHeader>
                                <CardBody>
                                    <AppointmentTable />
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