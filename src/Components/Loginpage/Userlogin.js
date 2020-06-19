import React, { Component } from 'react';
import { Table} from 'react-bootstrap';
class Userlogin extends Component {
    constructor() {
        super();
        this.state = {
            userlist:""
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/login')
            .then(response => response.json())
            .then(result => {
                this.setState({ userlist: result })
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    render() {
        return (
            <div>
                <h1 className="mt-5 mb-5">Use below user details for login</h1>
                        {
                            this.state.userlist ?
                                <div>
                                    <Table striped bordered hover responsive >
                                        <thead>
                                            <tr>
                                                <th>username</th>
                                                <th>password</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.userlist.map((item, i) =>
                                                    <tr>
                                                        <td>{item.username}</td>
                                                        <td>{item.password}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                                : null
                        }

            </div>
        );
    }
}

export default Userlogin;