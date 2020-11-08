import React from "react";
import Loading from "../Loading";

const apiURL: any = process.env.REACT_APP_API_URL;

interface Jobs {
  error: any;
  isLoaded: boolean;
  items: Array<any>;
}

class JobList extends React.Component<
  { error: any; isLoaded: boolean; items: Array<any> },
  Jobs
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
    fetch(apiURL + "/manufacturing/jobs/")
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
          <h2>Jobs</h2>
          <table className="table table-dark table-striped mb-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {items.map((job) => (
                <tr key={job.id}>
                  <td>{job.id}</td>
                  <td>{job.product_name}</td>
                  <td>{job.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default JobList;
