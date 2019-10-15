import React from 'react';
import 'bulma/css/bulma.css'
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <div className="container" id="login">
                <div className="card">
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
                                    <input className="input" type="email" placeholder="Email input" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="card-footer-item">Login</a>
                        <a href="#" className="card-footer-item">Sign Up</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
