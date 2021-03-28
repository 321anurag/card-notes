import "./App.css";
import TollForm from "./components/TollForm";
import CheckForm from "./components/CheckForm";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tollStatus: false,
      vehicleid: "",
    };

    this.handleStatus = this.handleStatus.bind(this);
  }

  handleStatus(body) {
    console.log("inn parent", body);
    this.setState({
      tollStatus: true,
      vehicleid: body.vehicleid,
    });
  }

  render() {
    return (
      <div>
        <CheckForm handleStatus={this.handleStatus}></CheckForm>
        <br />
        <TollForm props></TollForm>
      </div>
    );
  }
}
export default App;
