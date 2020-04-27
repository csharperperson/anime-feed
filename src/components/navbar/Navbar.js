import React from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import "./Navbar.css";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: "" };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <nav
                className="navbar has-shadow"
                role="navigation"
                aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/dashboard">
                        <h1>ANIME FEED</h1>
                    </Link>
                    <a
                        role="button"
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="control navbar-item">
                            <input
                                className="input"
                                type="text"
                                name="search"
                                placeholder="Gurren Lagann"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <a className="navbar-item">
                            <span className="icon">
                                <i className="fa fa-user"></i>
                            </span>
                        </a>
                        <a className="navbar-item">
                            <span className="icon">
                                <i className="fa fa-sign-out"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
