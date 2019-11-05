import React from 'react';
import client from '../../feathers';
import 'bulma/css/bulma.css';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    login(event) {
        event.preventDefault();

        const { email, password } = this.state;

        return client.authenticate({
            strategy: 'local',
            email, password
        }).catch(error => console.log(error));
    }
    
    render() {
        var toggleCard = this.props.toggleCard;

        return (
            <form onSubmit={this.login} id="login-card" className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Login
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input 
                                className="input" type="email" 
                                name="email" placeholder="Email"
                                onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control">
                                <input 
                                className="input" type="password" 
                                name="password" placeholder="Password"
                                onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className="field">
                            <button type="submit" className="button is-success is-fullwidth">
                                Login
                            </button>
                        </div>
                        <a onClick={() => toggleCard('signup')}>Don't have an account?</a>
                    </div>
                </div>
            </form>
        )
    }
}

export default Login;
