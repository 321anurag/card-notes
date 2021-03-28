import React from "react";
import "./TollForm.css";

class TollForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleid: "",
      money: "",
      error: null,
      isLoaded: false,
      item: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onradioChange = this.onradioChange.bind(this);
  }

  handleChange(event) {
    this.setState({ vehicleid: event.target.value });
  }

  handleSubmit(event) {
    // POST request using fetch()
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        vehicleid: this.state.vehicleid,
        money: this.state.money,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
    console.log(this.state.item.status);
    event.preventDefault();
  }

  onradioChange(event) {
    this.setState({
      money: event.target.value,
    });
  }

  render() {
    return (
      <div className="Form">
        <section className="Form-section">
          <form onSubmit={this.myChangeHandler}>
            <label>
              Vehicle Number -:
              <input type="text" onChange={this.myChangeHandler} />
            </label>
            <br></br>
            <label>Transaction Amount -:</label>
            <br></br>
            <label>
              <input
                type="radio"
                id="100"
                name="amount"
                value={this.state.value}
                onChange={this.onradioChange}
              />
              100
            </label>
            <label>
              <input
                type="radio"
                id="200"
                name="amount"
                value={this.state.value}
                onChange={this.onradioChange}
              />
              200
            </label>
            <br></br>
            <input type="submit" value="Submit" />
          </form>
        </section>
      </div>
    );
  }
}

export default TollForm;
