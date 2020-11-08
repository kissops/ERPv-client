import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProductList from ".././components/inventory/ProductList";
import LocationList from "../components/inventory/LocationList";
import WarehouseList from "../components/inventory/WarehouseList";

function Inventory() {
    return (
        <div className="Inventory">
            <h1>Inventory Control</h1>
            <Router>
                <ul className="nav nav-tabs my-2 bg-dark">
                    <li className="nav-item">
                        <Link className="nav-link py-3" to="/ProductList">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-3" to="/LocationList">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-3" to="/WarehouseList">Warehouses</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/ProductList">
                        <ProductList error={null} isLoaded={false} items={[]} />
                    </Route>
                    <Route path="/LocationList">
                        <LocationList error={null} isLoaded={false} items={[]} />
                    </Route>
                    <Route path="/WarehouseList">
                        <WarehouseList error={null} isLoaded={false} items={[]} />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Inventory;