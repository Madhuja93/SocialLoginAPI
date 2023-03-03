import React, { Component } from "react";
import '../../App.css';
import ProductService from "../../Service/ProductService";

export class Products extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };

  }

  componentDidMount() {
    ProductService.viewProducts()
    .then((response) => {
      console.log("Products from Products Component" + JSON.stringify(response));
      this.setState({
        products: response.data,
      });
    })
    .catch((error) => {
      // Error
      debugger;
      if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
      } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the 
          // browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
      }
      console.log(error.config);
    });
  }

  deleteProduct(productId) {
    ProductService.deleteProduct(productId)
    .then((response) => {
      console.log("Deleted Product From Component");
      this.setState({
        products: this.state.products.filter(
          (product) => product.productId !== productId
        ),
      });
      this.props.history.push(`/products`);
    });
  }

  getProductId(productId) {
    //this.props.history.push(`/viewProductDetails/${productId}`)
    window.location.href = '/viewProductDetails/' + productId ;
  }

  updateProductId(productId) {
    //this.props.history.push(`/viewProductDetails/${productId}`)
    window.location.href = '/updateProductDetails/' + productId ;
  }

  addProductId (){
    window.location.href = '/addProductDetails' ;
  }

  render() {
    return (
      <div className="App">
      
<center><br></br><br></br>
        <button
                    type="button"
                    class="btn btn-dark"
                    onClick={ () =>this.addProductId()}
                  >
                    Add Product
                  </button></center>

            <hr></hr>
        <table class="table table-striped table-hover">
          <thead>
            <tr class="table-success">
              <td>Product ID</td>
              <td>Product Name</td>
              <td>Product Price</td>
              <td>Product Description</td>
              <td>Product Expirary date</td>
              <td>Product Quantity</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => (
              <tr class="table-secondary" key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.productPrice}</td>
                <td>{product.productDes}</td>
                <td>{product.productExpire}</td>
                <td>{product.productQty}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={ () =>this.getProductId(product.productId)}
                  >
                    View
                  </button>
                  <button type="button" 
                  class="btn btn-secondary"
                  onClick={ () =>this.updateProductId(product.productId)}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => this.deleteProduct(product.productId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Products;
