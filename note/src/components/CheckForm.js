import React from "react";
import "./TollForm.css";

class CheckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleid: "",
      error: null,
      isLoaded: false,
      item: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ vehicleid: event.target.value });
  }

  handleSubmit(event) {
    // POST request using fetch()
    fetch("http://localhost:3000/", {
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        vehicleid: this.state.vehicleid,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(
      (result) => {
        result.json();
        console.log(result);
        if (result.ok) {
          const rptest = {
            status: "Access Granted",
            body: {
              _id: "6060c30fa539eae0bed2dcea",
              tripPending: true,
              money: "200",
              tripCount: "2",
              vehicleid: "AB125",
              date: "2021-03-28T17:55:27.981Z",
              __v: 0,
            },
          };
          this.setState({
            isLoaded: true,
            items: JSON.stringify(rptest),
          });
        } else {
          const rtest = {
            status: "Access Denied",
            body: false,
          };
          this.setState({
            isLoaded: true,
            items: rtest,
          });
        }
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
    console.log("item --->", this.state.item);
    console.log("item status--->", this.state.item.status);
    if (this.state.item.status === "Access Denied") {
      this.props.handleStatus(this.state.item.body);
    } else {
      // show pass
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <section className="App-section">
          <form onSubmit={this.handleSubmit}>
            <label>
              Vehicle Number -:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <br></br>
            <input type="submit" value="Submit" />
          </form>
        </section>
      </div>
    );
  }
}

export default CheckForm;
