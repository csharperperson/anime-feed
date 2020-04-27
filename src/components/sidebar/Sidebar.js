import React from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import "./Sidebar.css";

class Sidebar extends React.Component {
    render() {
        return (
            <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
                <p className="menu-label is-hidden-touch">Main</p>
                <ul className="menu-list">
                    <li>
                        <Link to="/dashboard" className="">
                            <span className="icon">
                                <i className="fa fa-home"></i>
                            </span>{" "}
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="">
                            <span className="icon">
                                <i className="fa fa-info"></i>
                            </span>{" "}
                            About
                        </Link>
                    </li>
                </ul>
            </aside>
        );
    }
}

export default Sidebar;
