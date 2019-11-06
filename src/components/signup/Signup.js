import React from 'react';
import client from '../../feathers';
import { withRouter } from "react-router-dom";

import 'bulma/css/bulma.css';
import './Signup.css';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.signup = this.signup.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    signup(event) {
        event.preventDefault();

        const { firstName, lastName, email, password } = this.state;

        return client.service('users')
            .create({ firstName, lastName, email, password })
            .then(() => this.login());
    }

    login() {
        const { email, password } = this.state;

        return client.authenticate({
            strategy: 'local',
            email, password
        }).catch(error => this.setState({ error }));
    }

    render() {
        var toggleCard = this.props.toggleCard;
        return (
            <form onSubmit={this.signup} id="signup-card" className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Signup
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <div className="field">
                            <label className="label">First Name</label>
                            <div className="control">
                                <input
                                    name="firstName" className="input"
                                    type="text" placeholder="First Name"
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Last Name</label>
                            <div className="control">
                                <input
                                    name="lastName" className="input"
                                    type="text" placeholder="Last Name"
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input
                                    name="email" className="input"
                                    type="email" placeholder="Email"
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input
                                    name="password" className="input"
                                    type="password" placeholder="Password"
                                    onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className="field">
                            <button type="submit" className="button is-success is-fullwidth">
                                Signup
                            </button>
                        </div>
                        <a onClick={() => toggleCard('login')}>Already have an account?</a>
                    </div>
                </div>
            </form>
        )
    }
}

export default withRouter(Signup);