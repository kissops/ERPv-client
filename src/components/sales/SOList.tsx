import React from "react";
import Loading from "../Loading";

const apiURL: any = process.env.REACT_APP_API_URL;

interface SOs {
  error: any;
  isLoaded: boolean;
  items: Array<any>;
}

class SOList extends React.Component<
  { error: any; isLoaded: boolean; items: Array<any> },
  SOs
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
    fetch(apiURL + "/sales/sales_orders/")
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
          <h2>Sales Orders</h2>
          <table className="table table-dark table-striped mb-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
              </tr>
            </thead>
            <tbody>
              {items.map((so) => (
                <tr key={so.id}>
                  <td>{so.id}</td>
                  <td>{so.customer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default SOList;
