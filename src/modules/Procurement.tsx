import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SupplierList from "../components/procurement/SupplierList";
import POList from "../components/procurement/POList";
import CreateSupplier from "../components/procurement/CreateSupplier";

function Procurement() {
    return (
        <div className="Procurement">
            <h1>Procurement</h1>
            <Router>
                <ul className="nav nav-tabs my-2 bg-dark">
                    <li className="nav-item">
                        <Link className="nav-link py-2" to="/SupplierList">Suppliers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-2" to="/POList">Purchase Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-2" to="/CreateSupplier">Create Supplier</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/CreateSupplier">
                        <CreateSupplier name={""} />
                    </Route>
                    <Route path="/SupplierList">
                        <SupplierList error={null} isLoaded={false} items={[]} />
                    </Route>
                    <Route path="/POList">
                        <POList error={null} isLoaded={false} items={[]} />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Procurement;