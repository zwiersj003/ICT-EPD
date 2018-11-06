import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Afspraken extends Component {
    render() {
        return (
            <div className="animated fadeIn">
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
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Afspraken