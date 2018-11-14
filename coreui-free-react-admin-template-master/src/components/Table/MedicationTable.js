import React, { Component } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Row, Table, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

class MedicatieTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            large: false,
            medication: [
                {
                    medicationName: 'Paracetamol',
                    medicationQuantity: '1000 mg',
                    medicationOften: '4x per dag'
                },
                {
                    medicationName: 'Celocoxib',
                    medicationQuantity: '150 mg',
                    medicationOften: '2x per dag'
                },
                {
                    medicationName: 'Oxicodon',
                    medicationQuantity: '1 pil',
                    medicationOften: '2x per dag'
                },
                {
                    medicationName: 'Movicolon',
                    medicationQuantity: '1 pil',
                    medicationOften: '1x per dag'
                },
                {
                    medicationName: 'Pantoprazol',
                    medicationQuantity: '1 pil',
                    medicationOften: '1x per dag'
                },
            ]
        };
        this.toggleLarge = this.toggleLarge.bind(this);
    }

    toggleLarge() {
        this.setState({
            large: !this.state.large,
        });
    }

    toggleHerhaal() {
        document.getElementById("herhaalrecept").style.display = "block";
    }

    renderMedication = ({ medicationName, medicationQuantity, medicationOften }) => <tr onClick={this.toggleLarge}><td>{medicationName}</td><td>{medicationQuantity}</td><td>{medicationOften}</td></tr>

    render() {
        const { medication } = this.state
        return (
            <div className="medication-table">
                <Table responsive striped hover bordered id="table-modules">
                    <thead>
                        <tr>
                            <th>Medicatie</th>
                            <th>Hoeveelheid</th>
                            <th>Hoe vaak innemen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medication.map(this.renderMedication)}
                        <Modal isOpen={this.state.large} toggle={this.toggleLarge} className={'modal-lg ' + this.props.className}>
                            <ModalHeader toggle={this.toggleLarge}>Paracetamol</ModalHeader>
                            <ModalBody>
                                <div id="medication-info">
                                    <Row>
                                        <Col md="6">
                                            <p><b>Medicatie:</b> Paracetamol</p>
                                            <p><b>Hoeveelheid:</b> 1000 mg</p>
                                            <p><b>Hoe vaak innemen:</b> 4x per dag</p>
                                        </Col>
                                        <Col md="6">
                                            <p><b>Datum medicijn gekregen:</b> 14 november 2018</p>
                                            <p><b>Eind datum medicijn:</b> Geen einddatum</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="extra-info">
                                    <Row>
                                        <Col md="6">
                                            <div id="description">
                                                <h4>Omschrijving</h4>
                                                Paracetamol (Amerikaans Engels: acetaminophen) is een pijnstillend en koortsverlagend middel. In combinatie met andere geneesmiddelen wordt paracetamol ook tegen symptomen van verkoudheid ingezet. De naam paracetamol is afgeleid van de chemische naam: para-acetylaminofenol. 
                                </div>
                                        </Col>
                                        <Col md="6">
                                            <div id="treatment">
                                                <h4>Herhaal recept aanvragen</h4>
                                                <Button color="primary" onClick={this.toggleHerhaal}>Aanvragen</Button>
                                                <div id="herhaalrecept">
                                                    <p4>Herhaalrecept is aangevraagd!</p4>
                                                </div>
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

export default MedicatieTable;