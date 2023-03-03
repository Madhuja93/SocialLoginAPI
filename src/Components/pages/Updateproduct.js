import React, { Component } from "react";
import ProductService from "../../Service/ProductService";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export class Updateproduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: props.productId,
      product: {},
    };
  }

  componentDidMount() {
    ProductService.searchProductById(this.state.productId).then((response) => {
      console.log("Get Product in the Component" + JSON.stringify(response));
      this.setState({
        product: response.data,
      });
    });
  }

  postProduct() {
    debugger;
    ProductService.saveProduct({
      productId: this.state.product.productId,
      productName: document.getElementById("productNameId").value,
      productPrice: this.state.product.productPrice,
      productDes: this.state.product.productDes,
      productExpire: this.state.product.productExpire,
      productQty: this.state.product.productQty,
    }).then((response) => {
      console.log("Get Product in the Component" + JSON.stringify(response));
      this.setState({
        product: response.data,
      });

      alert("Successfully Updated");
    });
  }

  setProductName(val) {
    this.setState({
      product: {
        productId: this.state.product.productId,
        productName: document.getElementById("productNameId").value,
        productPrice: document.getElementById("productPriceId").value,
        productDes: document.getElementById("productDesId").value,
        productExpire: document.getElementById("productExpId").value,
        productQty: document.getElementById("productQtyId").value,
      },
    });
  }

  render() {
    return (
      <div className="container mt-5">
      
      <div className="card">
          <div className="card-header bg-dark text-white">
            <h1>Update Product Details</h1>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="productNameId">Product Name:</label>
              <input
                id="productNameId"
                type="text"
                className="form-control"
                value={this.state.product.productName}
                onChange={(event) => this.setProductName(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="productPriceId">Product Price:</label>
              <input
                id="productPriceId"
                type="text"
                className="form-control"
                value={this.state.product.productPrice}
                onChange={(event) => this.setProductName(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="productDesId">Product Description:</label>
              <input
                id="productDesId"
                type="text"
                className="form-control"
                value={this.state.product.productDes}
                onChange={(event) => this.setProductName(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="productExpId">Product Expirary Date:</label>
              <input
                id="productExpId"
                type="date"
                className="form-control"
                value={this.state.product.productExpire}
                onChange={(event) => this.setProductName(event.target.value)}
                style={{backgroundColor: '#f1f1f1'}}
                required
              />
              
              <div className="form-group">
              <label htmlFor="productQtyId">Product Quantity:</label>
              <input
                id="productQtyId"
                type="text"
                className="form-control"
                value={this.state.product.productQty}
                onChange={(event) => this.setProductName(event.target.value)}
                style={{backgroundColor: '#f1f1f1'}}
                required
              /><br></br><br></br>

                    </div>    
          </div>
<center>
          <button type="submit" className="btn btn-dark"  onClick={ () =>this.postProduct() }>
              Update Product
            </button></center>
      </div>
      </div>
      </div>
      )
    }
}
    


export default Updateproduct;
