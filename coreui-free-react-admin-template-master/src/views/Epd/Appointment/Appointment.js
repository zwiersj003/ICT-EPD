import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import AppointmentTable from '../../../components/Table/AppointmentTable';

class Afspraken extends Component {
    constructor(props) {
        super(props)
        this.state = {
            appointments: [
                {
                    appointmentID: 1,
                    appointment: 'Controle',
                    date: '09-12-2018',
                    time: '13:15',
                    location: 'Amstelland Ziekenhuis',
                    doctor: 'R. Michels',
                    department: 'Spoedeisende Hulp',
                    treatment: 'Lorem ipsum',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit tristique ex, non sollicitudin mi molestie quis. Sed condimentum imperdiet ex, in viverra nisi molestie nec. Quisque et congue turpis, eget rhoncus ex. Curabitur elementum enim ac mollis maximus. Pellentesque a euismod lorem. Ut vel dolor libero. Integer dictum venenatis lorem. Proin bibendum varius massa, sed volutpat purus varius quis. Quisque quis mi at libero facilisis faucibus non vitae urna. Fusce mattis pulvinar nunc id dapibus. Cras et condimentum dui. Phasellus nec nisi in tortor auctor porta. Aliquam id nulla nibh.'
                },
                {
                    appointmentID: 2,
                    appointment: 'Spreekuur',
                    date: '22-11-2018',
                    time: '12:45',
                    location: 'Huisartsenpost',
                    doctor: 'R. Michels',
                    department: 'Spoedeisende Hulp',
                    treatment: 'Lorem ipsum',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit tristique ex, non sollicitudin mi molestie quis. Sed condimentum imperdiet ex, in viverra nisi molestie nec. Quisque et congue turpis, eget rhoncus ex. Curabitur elementum enim ac mollis maximus. Pellentesque a euismod lorem. Ut vel dolor libero. Integer dictum venenatis lorem. Proin bibendum varius massa, sed volutpat purus varius quis. Quisque quis mi at libero facilisis faucibus non vitae urna. Fusce mattis pulvinar nunc id dapibus. Cras et condimentum dui. Phasellus nec nisi in tortor auctor porta. Aliquam id nulla nibh.'
                },
                {
                    appointmentID: 3,
                    appointment: 'Ogen druppelen',
                    date: '18-02-2017',
                    time: '12:30',
                    location: 'VUMC',
                    doctor: 'R. Michels',
                    department: 'Oogheelkunde',
                    treatment: 'Lorem ipsum',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit tristique ex, non sollicitudin mi molestie quis. Sed condimentum imperdiet ex, in viverra nisi molestie nec. Quisque et congue turpis, eget rhoncus ex. Curabitur elementum enim ac mollis maximus. Pellentesque a euismod lorem. Ut vel dolor libero. Integer dictum venenatis lorem. Proin bibendum varius massa, sed volutpat purus varius quis. Quisque quis mi at libero facilisis faucibus non vitae urna. Fusce mattis pulvinar nunc id dapibus. Cras et condimentum dui. Phasellus nec nisi in tortor auctor porta. Aliquam id nulla nibh.'
                },
                {
                    appointmentID: 4,
                    appointment: 'Spoedeisende Hulp',
                    date: '18-02-2017',
                    time: '9:20',
                    location: 'VUMC',
                    doctor: 'R. Michels',
                    department: 'Spoedeisende Hulp',
                    treatment: 'Lorem ipsum',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit tristique ex, non sollicitudin mi molestie quis. Sed condimentum imperdiet ex, in viverra nisi molestie nec. Quisque et congue turpis, eget rhoncus ex. Curabitur elementum enim ac mollis maximus. Pellentesque a euismod lorem. Ut vel dolor libero. Integer dictum venenatis lorem. Proin bibendum varius massa, sed volutpat purus varius quis. Quisque quis mi at libero facilisis faucibus non vitae urna. Fusce mattis pulvinar nunc id dapibus. Cras et condimentum dui. Phasellus nec nisi in tortor auctor porta. Aliquam id nulla nibh.'
                },
                {
                    appointmentID: 5,
                    appointment: 'Spreekuur',
                    date: '02-08-2016',
                    time: '15:50',
                    location: 'Huisartsenpost',
                    doctor: 'R. Michels',
                    department: 'Huisarts',
                    treatment: 'Lorem ipsum',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit tristique ex, non sollicitudin mi molestie quis. Sed condimentum imperdiet ex, in viverra nisi molestie nec. Quisque et congue turpis, eget rhoncus ex. Curabitur elementum enim ac mollis maximus. Pellentesque a euismod lorem. Ut vel dolor libero. Integer dictum venenatis lorem. Proin bibendum varius massa, sed volutpat purus varius quis. Quisque quis mi at libero facilisis faucibus non vitae urna. Fusce mattis pulvinar nunc id dapibus. Cras et condimentum dui. Phasellus nec nisi in tortor auctor porta. Aliquam id nulla nibh.'
                },
            ]
        };
    }

    render() {
        const { appointments } = this.state
        return (
            <div className="animated fadeIn">
                <div className="appointments">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-calendar-o"></i> Afspraken
                                </CardHeader>
                        <CardBody>
                            <AppointmentTable appointments={appointments} />
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Afspraken