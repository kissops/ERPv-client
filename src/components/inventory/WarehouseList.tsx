import React from "react";
import Loading from "../Loading";

const apiURL: any = process.env.REACT_APP_API_URL;

interface Warehouses {
  error: any;
  isLoaded: boolean;
  items: Array<any>;
}

class WarehouseList extends React.Component<
  { error: any; isLoaded: boolean; items: Array<any> },
  Warehouses
> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: this.props.error,
      isLoaded: this.props.isLoaded,
      items: this.props.items,
    };
  }
  componentDidMount() {
    fetch(apiURL + "/inventory/warehouses/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
      return (
        <div className="table-responsive mt-3">
          <h2>Warehouses</h2>
          <table className="table table-dark table-striped mb-5">
            <thead>
              <tr>
                <th>Name</th>
                <th>Locations</th>
              </tr>
            </thead>
            <tbody>
              {items.map((warehouse) => (
                <tr key={warehouse.id}>
                  <td>{warehouse.name}</td>
                  <td>{warehouse.location_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default WarehouseList;
