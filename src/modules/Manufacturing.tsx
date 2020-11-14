import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import JobList from "../components/manufacturing/JobList";

function Manufacturing() {
    return (
        <div className="Manufacturing">
            <h1>Manufacturing</h1>
            <Router>
                <ul className="nav nav-tabs my-2 bg-dark">
                    <li className="nav-item">
                        <Link className="nav-link py-2" to="/JobList">Jobs</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/JobList">
                        <JobList error={null} isLoaded={false} items={[]} />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Manufacturing;