import React, { useState } from "react";
import { Link } from "react-router-dom";
import client from "../../feathers";

import "./Home.css";

export default function Home(props) {
    const [email, setEmail] = useState("");

    const handleSubmit = evt => {
        evt.preventDefault();

        return client
            .service("mailing-list")
            .create({ email_address: email, status: "subscribed" })
            .then(function(response) {
                this.setEmail("");
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    return (
        <section id="home-wrapper" className="hero is-info is-fullheight">
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <span className="navbar-item">
                                <h1>ANIME FEED</h1>
                            </span>
                            <span
                                className="navbar-burger burger"
                                data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                                <span className="navbar-item">
                                    <Link
                                        className="button is-white is-outlined"
                                        to="/">
                                        <span className="icon">
                                            <i className="fa fa-home"></i>
                                        </span>
                                        <span>Home</span>
                                    </Link>
                                </span>
                                <span className="navbar-item">
                                    <a
                                        className="button is-white is-outlined"
                                        href="https://github.com/csharperperson/anime-feed/blob/master/README.md">
                                        <span className="icon">
                                            <i className="fa fa-book"></i>
                                        </span>
                                        <span>Documentation</span>
                                    </a>
                                </span>
                                <span className="navbar-item">
                                    <a
                                        className="button is-white is-outlined"
                                        href="https://github.com/csharperperson/anime-feed">
                                        <span className="icon">
                                            <i className="fa fa-github"></i>
                                        </span>
                                        <span>View Source</span>
                                    </a>
                                </span>
                                <span className="navbar-item">
                                    <Link
                                        className="button is-white is-outlined"
                                        to="/login">
                                        <span className="icon">
                                            <i className="fa fa-superpowers"></i>
                                        </span>
                                        <span>Login</span>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-6 is-offset-3">
                        <h1 className="title">Coming Soon</h1>
                        <h2 className="subtitle">
                            Anime Feed is the only thing you should be using to
                            keep track of what shows you're watching or what
                            manga you're reading!
                        </h2>
                        <form onSubmit={handleSubmit} className="box">
                            <div className="field is-grouped">
                                <p className="control is-expanded">
                                    <input
                                        className="input"
                                        type="text"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </p>
                                <p className="control">
                                    <button
                                        type="submit"
                                        className="button is-info">
                                        Notify Me
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
