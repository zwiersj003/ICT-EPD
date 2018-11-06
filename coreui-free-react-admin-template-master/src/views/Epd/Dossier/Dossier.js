import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Dossier extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-folder-open"></i> Dossier
                    </CardHeader>
                            <CardBody>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-folder-open"></i> Dossier
                            </CardHeader>
                            <CardBody>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-folder-open"></i> Dossier
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

export default Dossier