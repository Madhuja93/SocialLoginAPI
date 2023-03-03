import React, { Component } from "react";
import "./Connect.css";
import "./SlackComponent.js";
import ProductService from "../../Service/ProductService";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack } from "@fortawesome/free-brands-svg-icons";

export class Connect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  changeMessageName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  changeMessageEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  changeMessageMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  sendMessage = () => {
    let message = {
      text: this.state.name + "\n" + this.state.email + "\n" + this.state.message,
    };
    ProductService.sendMessage(message).then((response) => {
      console.log("The message is sending to the Slack" + JSON.stringify(response));
      alert("success");
    });
  };

  render() {
    return (
      <>
        <br />
        <br />
        <div
          className="form-container"
          style={{ fontFamily: "Arial", backgroundColor: "#f8f8f8" }}
        >
          <h1>Contact Us</h1>
          <p>If you have any questions or concerns, please reach out to us using the form below.</p>
          <form onSubmit={this.sendMessage}>
            <label>
              Name:
              <input type="text" value={this.state.name} onChange={this.changeMessageName} />
            </label>
            <br />
            <label>
              Email:
              <input type="email" value={this.email} onChange={this.changeMessageEmail} />
            </label>
            <br />
            <label>
              Message:
              <textarea value={this.message} onChange={this.changeMessageMessage} />
            </label>
            <br /><center>            
              <button className="btn btn-dark" type="submit">
              <FontAwesomeIcon icon={faSlack} /> Send message using Slack
            </button></center>

          </form>
        </div>
        <br />
        <br />
        <Footer />
      </>
    );
  }
}

export default Connect;
