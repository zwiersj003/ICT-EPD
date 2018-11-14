import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import PersonalData from '../../../components/Card/PersonalData';
import InsuranceCard from '../../../components/Card/InsuranceInfo';
import ContactInfo from '../../../components/Card/ContactInfo';

class Home extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                 <div className="home">

                    <Row>
                        <Col sm="12">
                            <PersonalData/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <InsuranceCard />
                        </Col>
                        <Col md="6">
                            <ContactInfo />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Home