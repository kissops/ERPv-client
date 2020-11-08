import React from "react";

class Loading extends React.Component {
  render() {
    return (
        <div className="d-flex align-items-center mx-4">
            <h2>Loading...</h2>
            <div className="spinner-border ml-auto mt-1" role="status"></div>
        </div>
    );
  }
}

export default Loading;
