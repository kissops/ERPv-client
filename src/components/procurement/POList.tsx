import React from "react";
import Loading from "../Loading";

const apiURL: any = process.env.REACT_APP_API_URL;

interface POs {
  error: any;
  isLoaded: boolean;
  items: Array<any>;
}

class POList extends React.Component<
  { error: any; isLoaded: boolean; items: Array<any> },
  POs
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
    fetch(apiURL + "/purchase/purchase_orders/")
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
          <h2>Purchase Orders</h2>
          <table className="table table-dark table-striped mb-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Supplier</th>
              </tr>
            </thead>
            <tbody>
              {items.map((po) => (
                <tr key={po.id}>
                  <td>{po.id}</td>
                  <td>{po.supplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default POList;
