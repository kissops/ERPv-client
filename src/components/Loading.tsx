import React from "react";

class Loading extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center bg-dark px-4 py-3 my-3">
        Loading...
        <div className="spinner-border spinner-border-sm ml-auto" role="status" aria-hidden="true"></div>
      </div>
    );
  }
}

export default Loading;
