import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import PersonalData from '../../../components/Card/PersonalData';
import InsuranceCard from '../../../components/Card/InsuranceInfo';
import ContactInfo from '../../../components/Card/ContactInfo';



class Home extends Component {
    // toggleLarge(key) {
    //     this.setState({
    //         large: !this.state.large
    //     });
    // }


    // renderAppointment = ({ appointmentID, appointment, date, location }) => (
    //     <tr key={appointmentID} onClick={this.toggleLarge}>
    //         <td>{appointmentID}</td>
    //         <td>{appointment}</td>
    //         <td>{date}</td>
    //         <td>{location}</td>
    //     </tr>)
    
    // }

    render() {
        return (
            <div className="animated fadeIn">
                 <div className="home">
                 <div className="divparent">
                    <Row>
                        
                        <Col sm="6" className="div1">
                            <Col>
                                <PersonalData/>
                            </Col>
                        </Col>
                        <Col md="6">
                            <Col md ="12" >
                                <InsuranceCard />
                            </Col>
                            <Col md="12">
                                <ContactInfo />
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