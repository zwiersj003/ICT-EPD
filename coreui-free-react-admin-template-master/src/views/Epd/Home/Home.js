import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import PersonalData from '../../../components/Card/PersonalData';
import InsuranceCard from '../../../components/Card/InsuranceInfo';
import ContactInfo from '../../../components/Card/ContactInfo';

class Home extends Component {
    constructor(props){
        super(props)
            this.state = {
                usersArray: [
                    {
                        name: 'Robby Michels',
                        street: 'Wibautstraat 1',
                        city: 'Amsterdam',
                        dateOfBirth: '05-12-1991',
                        bsn: '010101010101',
                        email: 'Robby.Michels@hva.nl',
                        telefoon: '06 51 51 51 51',
                        verzekering: [{
                            zorgverzekering: "CZ",
                            dekking: "WA+",
                            website: "www.CZ.nl",
                            telefoon: "06 51 51 51 51",
                        }]
                    },
                    {
                        name: 'Jasper Zwiers',
                        street: 'Wibautstraat 1',
                        city: 'Amsterdam',
                        dateOfBirth: '01-01-2001',
                        bsn: '000000000000',
                        email: 'Jasper.Zwiers@hva.nl',
                        telefoon: '06 51 51 51 51',
                        verzekering: [{
                            zorgverzekering: "CZ",
                            dekking: "All-Risk",
                            website: "www.CZ.nl",
                            telefoon: "06 51 51 51 51",
                        }]
                    },
                    {
                        name: 'Melanie Backers',
                        street: 'Wibautstraat 1',
                        city: 'Amsterdam',
                        dateOfBirth: '01-01-2002',
                        bsn: '0000000234400',
                        email: 'Melanie.Backers@hva.nl',
                        telefoon: '06 51 51 51 51',
                        verzekering: [{
                            zorgverzekering: "InShared",
                            dekking: "WA",
                            website: "www.inshared.nl",
                            telefoon: "06 51 51 51 51",
                        }]
                    }
                ],
                randomNumber: null
            }

            this.getRandomNumber = this.getRandomNumber.bind(this)
    }

    componentWillMount(){
        this.getRandomNumber()
    }

    getRandomNumber(){
        let { usersArray } = this.state
        const min = 1
        const max = usersArray.length

        const rand = Math.round((min + Math.random() * (max - min)) - 1)
        console.log("rand:", rand)
        this.setState({...this.state, randomNumber: rand})
    }
    

    render() {
        let { usersArray, randomNumber } = this.state
        const usersObject = usersArray[randomNumber]
        return (
            <div className="animated fadeIn">
                 <div className="home">
                    <div className="divparent div1">
                        <Row>
                            <Col sm="6" >
                                <Col>
                                    <PersonalData usersObject={usersObject}/>           
                                </Col>
                            </Col>
                            <Col md="6">
                                <Col md ="12" >
                                    <InsuranceCard usersObject={usersObject}/>
                                </Col>
                                <Col md="12">
                                    <ContactInfo usersObject={usersObject}/>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home