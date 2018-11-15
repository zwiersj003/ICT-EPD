import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Button, Col, Row, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class PersonalData extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            users: [{
                name: '',
                street: '',
                city: '',
                dateOfBirth: '',
                bsn: '',
                email: '',
            }
            ],
            randomUser: 0
        }
    }

    componentDidMount() {

            const usersArray = [
                {
                    name: 'Robby Michels',
                    street: 'Wibautstraat 1',
                    city: 'Amsterdam',
                    dateOfBirth: '05-12-1991',
                    bsn: '010101010101',
                    email: 'Robby.Michels@hva.nl'
                },
                {
                    name: 'Jasper Zwiers',
                    street: 'Wibautstraat 1',
                    city: 'Amsterdam',
                    dateOfBirth: '01-01-2001',
                    bsn: '000000000000',
                    email: 'Jasper.Zwiers@hva.nl'
                },
                {
                    name: 'Melanie Backers',
                    street: 'Wibautstraat 1',
                    city: 'Amsterdam',
                    dateOfBirth: '01-01-2002',
                    bsn: '0000000234400',
                    email: 'Melanie.Backers@hva.nl' 
                }
            ]
            const min = 1
            const max = usersArray.length
    
            const rand = Math.round((min + Math.random() * (max - min)) - 1)
            console.log(rand)
            this.setState({ users: usersArray, randomUser: rand });
    
    }

    

    render() {
        return (
         <div class ="personalData">
                <Card>
                    <CardHeader>
                        <i className="fa fa-user"></i> Persoonsgegevens
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md="3">
                                <img src="/../../../assets/img/avatars/6.jpg"/>
                            </Col>
                            <Col md="9">
                                <div>
                                        <p><b>Naam:</b> {this.state.users[this.state.randomUser].name} </p> 
                                        <p><b>Straatnaam: </b> {this.state.users[this.state.randomUser].street} </p>
                                        <p><b>Woonplaats: </b> {this.state.users[this.state.randomUser].city} </p>
                                        <p><b>Geboortedatum: </b> {this.state.users[this.state.randomUser].dateOfBirth} </p>
                                        <p><b>BSN: </b> {this.state.users[this.state.randomUser].bsn} </p>
                                        <p><b>Email: </b> {this.state.users[this.state.randomUser].email} </p>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
</div>
        )
    }
}

export default PersonalData