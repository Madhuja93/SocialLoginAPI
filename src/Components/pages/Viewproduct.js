import React, { Component } from "react";
import '../../App.css';
import ProductService from "../../Service/ProductService";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Viewproduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: props.productId,
      product: {}
    }
  }

  componentDidMount() {
    ProductService.searchProductById(this.state.productId)
    .then((response) => {
      console.log("Get Product in the Component" + JSON.stringify(response))
      this.setState({
        product: response.data
      })
    })
  }

  render() {
    return (
      <div className="container">
        <br/><br/>
     
          <div className="card-header bg-dark text-white">
            <h1>View Product Details</h1>
          </div>

        <div className="card">
          <div className="card-body">
            <label>Product Name : </label>
            <p>{this.state.product.productName}</p>
            <label>Product Price : </label>
            <p>{this.state.product.productPrice}</p>
            <label>Product Description : </label>
            <p>{this.state.product.productDes}</p>
            <label>Product Expirary Date : </label>
            <p>{this.state.product.productExpire}</p>
            <label>Product Quantity : </label>
            <p>{this.state.product.productQty}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Viewproduct;
