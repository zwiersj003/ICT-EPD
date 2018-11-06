import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <Card>
                    <CardHeader>
                        <i className="icon-home"></i> Home
                    </CardHeader>
                    <CardBody>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Home