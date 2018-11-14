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
                    medicationOften: '4x per dag',
                    medicationDate: '14 november 2018',
                    medicationEndDate: 'Geen einddatum'
                },
                {
                    medicationName: 'Celocoxib',
                    medicationQuantity: '150 mg',
                    medicationOften: '2x per dag',
                    medicationDate: '14 november 2018',
                    medicationEndDate: 'Geen einddatum'
                },
                {
                    medicationName: 'Oxicodon',
                    medicationQuantity: '1 pil',
                    medicationOften: '2x per dag',
                    medicationDate: '14 november 2018',
                    medicationEndDate: 'Geen einddatum'
                },
                {
                    medicationName: 'Movicolon',
                    medicationQuantity: '1 pil',
                    medicationOften: '1x per dag',
                    medicationDate: '14 november 2018',
                    medicationEndDate: 'Geen einddatum'
                },
                {
                    medicationName: 'Pantoprazol',
                    medicationQuantity: '1 pil',
                    medicationOften: '1x per dag',
                    medicationDate: '14 november 2018',
                    medicationEndDate: 'Geen einddatum'
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

    renderMedication = ({ medicationName, medicationQuantity, medicationOften, medicationDate, medicationEndDate }) => <tr onClick={this.toggleLarge}>
    <td>{medicationName}</td>
    <td>{medicationQuantity}</td>
    <td>{medicationOften}</td>
    <td>{medicationDate}</td>
    <td>{medicationEndDate}</td>
    <td><Button color="primary" onClick={()=>{ alert('Herhaalrecept is aangevraagd!'); }}>Aanvragen</Button></td>
    </tr>
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
                            <th>Datum medicijn gekregen</th>
                            <th>Einddatum medicijn</th>
                            <th>Herhaal recept aanvragen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medication.map(this.renderMedication)}
                        
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default MedicatieTable;