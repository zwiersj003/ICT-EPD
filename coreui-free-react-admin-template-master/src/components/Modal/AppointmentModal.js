import React, { Component } from 'react';
import { Button, Col, Row, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class AfspraakModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            large: false,
        };
        this.toggleLarge = this.toggleLarge.bind(this);
    }

    toggleLarge() {
        this.setState({
            large: !this.state.large,
        });
    }

    render() {
        return (
            <div>
            <Button onClick={this.toggleLarge} className="mr-1">Afspraak modal</Button>
            <Modal isOpen={this.state.large} toggle={this.toggleLarge} className={'modal-lg ' + this.props.className}>
                <ModalHeader toggle={this.toggleLarge}>Titel</ModalHeader>
                <ModalBody>
                    <div id="appointment-info">
                        <Row>
                            <Col md="6">
                                <p><b>Locatie:</b> AMC</p>
                                <p><b>Datum:</b> 23-11-2018</p>
                                <p><b>Tijd:</b> 10:30</p>
                            </Col>
                            <Col md="6">
                                <p><b>Afdeling:</b> Polikliniek</p>
                                <p><b>Dokter:</b> R. Michels</p>
                            </Col>
                        </Row>
                    </div>
                    <div className="extra-info">
                        <Row>
                            <Col md="6">
                                <div id="description">
                                    <h4>Omschrijving</h4>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit tristique ex, non sollicitudin mi molestie quis. Sed condimentum imperdiet ex, in viverra nisi molestie nec. Quisque et congue turpis, eget rhoncus ex. Curabitur elementum enim ac mollis maximus. Pellentesque a euismod lorem. Ut vel dolor libero. Integer dictum venenatis lorem. Proin bibendum varius massa, sed volutpat purus varius quis. Quisque quis mi at libero facilisis faucibus non vitae urna. Fusce mattis pulvinar nunc id dapibus. Cras et condimentum dui. Phasellus nec nisi in tortor auctor porta. Aliquam id nulla nibh.
                                </div>
                            </Col>
                            <Col md="6">
                                <div id="treatment">
                                    <h4>Behandeling</h4>
                                    Lorem ipsum
                                </div>
                            </Col>
                        </Row>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggleLarge}>Sluiten</Button>
                </ModalFooter>
            </Modal>
            </div>
        )
    }
}

export default AfspraakModal