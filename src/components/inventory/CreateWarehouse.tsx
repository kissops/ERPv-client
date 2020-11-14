import React from "react";

const apiURL: any = process.env.REACT_APP_API_URL;

interface Create {
    name: any;
}

class CreateWarehouse extends React.Component<{ name: any }, Create> {
  constructor(props: any) {
    super(props);
    this.state = {
        name: this.props.name
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event: any) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event: any) {
    event.preventDefault();
    const name = this.state
    fetch(apiURL + "/inventory/warehouses/", {
      method: 'POST',
      body: JSON.stringify(name),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  render() {
    return (
      <form className="mt-2" onSubmit={this.handleSubmit}>
        <h2>Create Warehouse</h2>
        <div className="px-4 bg-dark">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Warehouse Name</label>
            <input
              required
              type="text"
              className="form-control"
              id="name"
              onChange={this.onChange}
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

export default CreateWarehouse;
