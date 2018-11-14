import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Button, Col, Row, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class InsuranceInfoCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [{
                
                zorgverzekering: "CZ",
                dekking: "All-Risk",
                website: "www.CZ.nl",
                telefoon: "06 51 51 51 51",
            }],
            randomize: 0
        }
    }

    componentDidMount() {

            const insuranceArray = [{
                zorgverzekering: "CZ",
                dekking: "All-Risk",
                website: "www.CZ.nl",
                telefoon: "06 51 51 51 51",
            } ,
            {   
                zorgverzekering: "Independer",
                dekking: "WA+",
                website: "www.independer.nl",
                telefoon: "06 51 51 51 51",
            }]

            const min = 1
            const max = insuranceArray.length
    
            const rand = Math.round((min + Math.random() * (max - min)) - 1)
            console.log(rand)
            this.setState({ users: insuranceArray, randomize: rand});
    }

    render() {
        return(
            <Card>
                <CardHeader>
                    <i className="fa fa-info-circle"></i> Zorgverzekering Informatie
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col md="6">
                            <p><b>Zorgverzekering: </b> {this.state.users[this.state.randomize].zorgverzekering}</p>
                            <p><b>Dekking: </b> {this.state.users[this.state.randomize].dekking}</p>
                            <p><b>Website: </b> {this.state.users[this.state.randomize].website}</p>
                            <p><b>Telefoonnummer: </b> {this.state.users[this.state.randomize].telefoon}</p>
                        </Col>
                        <Col md="6">
                            <img src="/../../../assets/img/avatars/zorgpas_achterkant.png" />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }
}

export default InsuranceInfoCard