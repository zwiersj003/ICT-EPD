import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import MedicationTable from '../../../components/Table/MedicationTable';
import HistoryMedicationTable from '../../../components/Table/HistoryMedicationTable';

class Medication extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <div className="medication">
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-heartbeat"></i> Medicijnen
                                </CardHeader>
                                <CardBody>
                                    <div id="herhaalrecept">
                                        <p>Herhaalrecept is aangevraagd!</p>
                                    </div>
                                    <MedicationTable/>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-heartbeat"></i> Historie
                                </CardHeader>
                                <CardBody>
                                    <HistoryMedicationTable/>
                                </CardBody>
                            </Card>
                </div>
            </div>
        )
    }
}

export default Medication