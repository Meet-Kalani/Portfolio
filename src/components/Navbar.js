import React from 'react';
// import { Link, Router, Switch, Route } from 'react-router-dom';

const Navbar = () => {
    return (
        // <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <a className="navbar-brand text-uppercase" href="#">Meet Kalani</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Intro</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Skills</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Projects
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Todo List</a>
                                <a className="dropdown-item" href="/">Web Dev</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            // <Switch>
                // <Route path="/">
                    // {/* <Home /> */}
                // </Route>
            // </Switch>
        // </Router>
    )
}

export default Navbar
