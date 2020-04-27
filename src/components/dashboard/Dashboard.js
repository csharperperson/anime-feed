import React from "react";
import "bulma/css/bulma.css";
import "./Dashboard.css";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import client from '../../feathers';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { shows: [] };
    }

    componentDidMount () {
        this.shows = client.service('anime').find();
      }
    
      componentWillUnmount () {
        this.shows.unsubscribe();
      }

    render() {
        return (
            <div>
                <Navbar />
                <section className="main-content columns is-fullheight">
                    <Sidebar />
                    <div className="container column is-10">
                        <div className="section">
                            <div className="card">
                                <div className="card-header">
                                    <p className="card-header-title">Header</p>
                                </div>
                                <div className="card-content">
                                    <div className="content">Content</div>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Dashboard;
