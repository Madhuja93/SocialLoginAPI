import React, { Component } from "react";
import ProductService from "../../Service/ProductService";
import "./SlackComponent.js";

export class SlackComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  changeMessage = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  sendMessage = () => {
    let message = {
      text: this.state.text,
    };
    ProductService.sendMessage(message).then((response) => {
      console.log(
        "The message is sending to the Slack" + JSON.stringify(response)
      );
      alert("success");
    });
  };

  render() {
    return (
      <div className="App">
        <h1>SLACK COMPONENT</h1>
        <form>
          <input
            type="text"
            value={this.text}
            onChange={this.changeMessage}
            placeholder="Please input the message to send to Slack"
          ></input>
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.sendMessage}
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    );
  }
}

export default SlackComponent;
