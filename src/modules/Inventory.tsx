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
import CreateProduct from "../components/inventory/CreateProduct";
import CreateWarehouse from "../components/inventory/CreateWarehouse";

function Inventory() {
    return (
        <div className="Inventory">
            <h1>Inventory Control</h1>
            <Router>
                <ul className="nav nav-tabs my-2 bg-dark">
                    <li className="nav-item">
                        <Link className="nav-link py-2" to="/ProductList">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-2" to="/LocationList">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-2" to="/WarehouseList">Warehouses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-2" to="/CreateProduct">Create Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link py-2" to="/CreateWarehouse">Create Warehouse</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/CreateProduct">
                        <CreateProduct name={""} />
                    </Route>
                    <Route path="/CreateWarehouse">
                        <CreateWarehouse name={""} />
                    </Route>
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