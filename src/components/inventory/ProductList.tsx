import React from "react";
import Loading from "../Loading";

const apiURL: any = process.env.REACT_APP_API_URL;

interface Products {
  error: any;
  isLoaded: boolean;
  items: Array<any>;
}

class ProductList extends React.Component<
  { error: any; isLoaded: boolean; items: Array<any> },
  Products
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
    fetch(apiURL + "/inventory/products/")
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
          <h2>Products</h2>
          <table className="table table-dark table-striped mb-5">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Required</th>
              </tr>
            </thead>
            <tbody>
              {items.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.required}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default ProductList;
