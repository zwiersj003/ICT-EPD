import React, { Component } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Row, Table, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

class HistoryMedicationTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            large: false,
            medication: [
                {
                    medicationName: 'Paracetamol',
                    medicationQuantity: '1 pil',
                    medicationOften: '1x per dag',
                    medicationDate: '01-11-2017',
                    medicationEndDate: '14-05-2018'
                },
                {
                    medicationName: 'Celocoxib',
                    medicationQuantity: '1 pil',
                    medicationOften: '1x per dag',
                    medicationDate: '05-09-2017',
                    medicationEndDate: '25-01-2018'
                },
                {
                    medicationName: 'Oxicodon',
                    medicationQuantity: '1 pil',
                    medicationOften: '1x per dag',
                    medicationDate: '29-06-2017',
                    medicationEndDate: '29-12-2017'
                },
                {
                    medicationName: 'Movicolon',
                    medicationQuantity: '1 pil',
                    medicationOften: '1x per dag',
                    medicationDate: '29-06-2017',
                    medicationEndDate: '29-12-2017'
                },
                {
                    medicationName: 'Pantoprazol',
                    medicationQuantity: '1 pil',
                    medicationOften: '1x per dag',
                    medicationDate: '01-01-2015',
                    medicationEndDate: '01-01-2016'
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

    renderMedication = ({ medicationName, medicationQuantity, medicationOften, medicationDate, medicationEndDate }) => <tr key={medicationName} onClick={this.toggleLarge}>
    <td>{medicationName}</td>
    <td>{medicationQuantity}</td>
    <td>{medicationOften}</td>
    <td>{medicationDate}</td>
    <td>{medicationEndDate}</td>
    </tr>

    render() {
        const { medication } = this.state
        return (
            <div className="medication-table">
                <Table responsive striped hover bordered id="table-modules">
                    <thead>
                        <tr>
                            <th>Medicijn</th>
                            <th>Hoeveelheid</th>
                            <th>Hoe vaak ingenomen</th>
                            <th>Datum</th>
                            <th>Einddatum</th>
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

export default HistoryMedicationTable;