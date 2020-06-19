import React, { Component } from 'react';
import { Table, Container, Row ,Col} from 'react-bootstrap';
import './Dashboard.css';
class EmployeeList extends Component {
    constructor() {
        super();
        this.state = {
            list: null
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/user')
            .then(response => response.json())
            .then(result => {
                this.setState({ list: result })
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm={4} className="sidenav">
                        <div >
                            <div className="login-main-text mt-5 mb-5">
                                <h2>Application Dashboard Page</h2>
                            </div>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <h1 className="mt-5 mb-5">Employee List</h1>
                        {
                            this.state.list ?
                                <div>
                                    <Table striped bordered hover responsive >
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Gender</th>
                                                <th>Email</th>
                                                <th>phone no</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.list.map((item, i) =>
                                                    <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.age}</td>
                                                        <td>{item.gender}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.phoneNo}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                                : <p>please wait...</p>
                        }

                    </Col>
                </Row>

            </Container>
        );
        console.warn(this.state);
    }

}

export default EmployeeList;