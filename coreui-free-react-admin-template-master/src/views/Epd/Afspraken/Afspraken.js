import React, { Component } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Row, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import AfspraakModal from '../../../components/Modal/AfspraakModal'

class Afspraken extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <div className="afpraken">
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
                                    <AfspraakModal />
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