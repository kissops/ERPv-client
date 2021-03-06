import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CustomerList from "../components/sales/CustomerList";
import SOList from "../components/sales/SOList";
import CreateCustomer from "../components/sales/CreateCustomer";

function Sales() {
    return (
        <div className="Sales">
            <h1>Sales</h1>
            <Router>
                <ul className="nav nav-tabs my-2 bg-dark">
                    <li className="nav-item">
                        <Link className="nav-link py-2" to="/CustomerList">Customers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-2" to="/SOList">Sales Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-2" to="/CreateCustomer">Create Customer</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/CreateCustomer">
                        <CreateCustomer name={""} />
                    </Route>
                    <Route path="/CustomerList">
                        <CustomerList error={null} isLoaded={false} items={[]} />
                    </Route>
                    <Route path="/SOList">
                        <SOList error={null} isLoaded={false} items={[]} />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Sales;