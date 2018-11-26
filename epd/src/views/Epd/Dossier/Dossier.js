import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import DossierCard from '../../../components/Card/PersonalData';


class Dossier extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <div className="home">
                    <Row>
                        <Col sm="12">
                        <DossierCard/>
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
            </div>
        )
    }
}

export default Dossier