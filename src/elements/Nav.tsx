import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from ".././modules/Dashboard";
import Inventory from ".././modules/Inventory";
import Manufacturing from ".././modules/Manufacturing";
import Procurement from ".././modules/Procurement";
import Sales from ".././modules/Sales";


function Nav() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Inventory">Inventory</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Manufacturing">Manufacturing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Procurement">Procurement</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Sales">Sales</Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="navbar-brand" to="/">ERPv</Link>
                </div>
            </nav>
            <div className="container-fluid my-2">
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route path="/Inventory">
                        <Inventory />
                    </Route>
                    <Route path="/Manufacturing">
                        <Manufacturing />
                    </Route>
                    <Route path="/Procurement">
                        <Procurement />
                    </Route>
                    <Route path="/Sales">
                        <Sales />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Nav;
