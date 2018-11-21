import React, { Component } from 'react'
import { Button, Col, Row, Table, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

class Appointment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            large: false,
            currentlySelected: 0
        };
        this.toggleLarge = this.toggleLarge.bind(this);
    }

    toggleLarge() {
        this.setState({
            large: !this.state.large
        });
    }

    setModal(currentlySelected) {
        this.setState({
            currentlySelected: currentlySelected - 1
        });
        console.log(this.state.currentlySelected)
        this.toggleLarge()
    }

    renderAppointment = ({ appointmentID, appointment, date, location }) => (
        <tr key={appointmentID} onClick={() => this.setModal(appointmentID)}>
            <td>{appointmentID}</td>
            <td>{appointment}</td>
            <td>{date}</td>
            <td>{location}</td>
        </tr>)

    render() {
        let { appointments } = this.props
        let { currentlySelected } = this.state
        const modalAppointment = appointments[currentlySelected]
        return (
            <div className="appointment-table">
                <Table responsive striped hover bordered id="table-modules">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Afspraak</th>
                            <th>Datum</th>
                            <th>Locatie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(this.renderAppointment)}
                        <Modal isOpen={this.state.large} toggle={this.toggleLarge} className={'modal-lg ' + this.props.className}>
                            <ModalHeader toggle={this.toggleLarge}>{modalAppointment.appointment}</ModalHeader>
                            <ModalBody>
                                <div id="appointment-info">
                                    <Row>
                                        <Col md="6">
                                            <p><b>Locatie:</b> {modalAppointment.location}</p>
                                            <p><b>Datum:</b> {modalAppointment.date}</p>
                                            <p><b>Tijd:</b> {modalAppointment.time}</p>
                                        </Col>
                                        <Col md="6">
                                            <p><b>Afdeling:</b> {modalAppointment.department}</p>
                                            <p><b>Dokter:</b> {modalAppointment.doctor}</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="extra-info">
                                    <Row>
                                        <Col md="6">
                                            <div id="description">
                                                <h4>Omschrijving</h4>
                                                {modalAppointment.description}
                                            </div>
                                        </Col>
                                        <Col md="6">
                                            <div id="treatment">
                                                <h4>Behandeling</h4>
                                                {modalAppointment.treatment}
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleLarge}>Sluiten</Button>
                            </ModalFooter>
                        </Modal>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Appointment;