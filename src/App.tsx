import React from 'react';
import Nav from "./elements/Nav";
import Footer from "./elements/Footer";

const title: any = "ERPv";

class App extends React.Component {
  render() {
    document.title = title
    return (
      <div className="App">
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;
