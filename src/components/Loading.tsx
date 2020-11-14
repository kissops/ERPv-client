import React from "react";

class Loading extends React.Component {
  render() {
    return (
        <div className="my-3 bg-dark">
            <div className="spinner-border m-3 " role="status"></div>
        </div>
    );
  }
}

export default Loading;
