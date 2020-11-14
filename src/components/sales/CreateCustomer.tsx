import React from "react";

const apiURL: any = process.env.REACT_APP_API_URL;

interface Create {
    name: any;
    address: any;
    postcode: any;
}

class CreateCustomer extends React.Component<{ name: any }, Create> {
  constructor(props: any) {
    super(props);
    this.state = {
        name: this.props.name,
        address: "",
        postcode: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeaddress = this.onChangeaddress.bind(this);
    this.onChangepostcode = this.onChangepostcode.bind(this);
  }

  onChangename(event: any) {
    this.setState({ name: event.target.value });
  }

  onChangeaddress(event: any) {
    this.setState({ address: event.target.value });
  }

  onChangepostcode(event: any) {
    this.setState({ postcode: event.target.value });
  }

  handleSubmit(event: any) {
    event.preventDefault();
    const data = this.state
    fetch(apiURL + "/sales/customers/", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  render() {
    return (
      <form className="mt-2" onSubmit={this.handleSubmit}>
        <h2>Create Customer</h2>
        <div className="px-4 bg-dark">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Customer Name</label>
            <input
              required
              type="text"
              className="form-control mb-2"
              id="name"
              onChange={this.onChangename}
            ></input>
            <label htmlFor="name" className="form-label">Address</label>
            <textarea
              required
              rows={5}
              className="form-control mb-2"
              id="address"
              onChange={this.onChangeaddress}
            ></textarea>
            <label htmlFor="name" className="form-label">Postcode</label>
            <input
              required
              type="text"
              className="form-control"
              id="postcode"
              onChange={this.onChangepostcode}
            ></input>
            <button type="submit" className="btn btn-sm btn-outline-primary my-3">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default CreateCustomer;
