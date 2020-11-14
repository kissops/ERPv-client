import React from "react";
import Loading from "../Loading";

const apiURL: any = process.env.REACT_APP_API_URL;

interface Locations {
  error: any;
  isLoaded: boolean;
  items: Array<any>;
}

class LocationList extends React.Component<
  { error: any; isLoaded: boolean; items: Array<any> },
  Locations
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
    fetch(apiURL + "/inventory/locations/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
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
          <h2>Locations</h2>
          <table className="table table-dark table-striped mb-5">
            <thead>
              <tr>
                <th>Name</th>
                <th>Warehouse</th>
              </tr>
            </thead>
            <tbody>
              {items.map((location) => (
                <tr key={location.id}>
                  <td>{location.name}</td>
                  <td>{location.location_warehouse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default LocationList;
