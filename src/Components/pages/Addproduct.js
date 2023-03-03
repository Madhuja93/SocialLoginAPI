import React, { Component} from "react";
import '../../App.css';
import ProductService from "../../Service/ProductService";

export class Addproduct extends Component {
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

  postProduct (){
    debugger;
    ProductService.saveProduct({
      productId : this.state.product.productId,
      productName : document.getElementById('productNameId').value,
      productPrice : this.state.product.productPrice,
      productDes : this.state.product.productDes,
      productExpire : this.state.product.productExpire,
      productQty : this.state.product.productQty
    })
    .then((response) => {
      console.log("Get Product in the Component" + JSON.stringify(response))
      this.setState({
        product: response.data
      })

      alert('Successfully Added');
    })
  }

  setProductName(val){

    this.setState({
      product : {
        productId : this.state.product.productId,
        productName : document.getElementById('productNameId').value,
        productPrice : document.getElementById('productPriceId').value,
        productDes : document.getElementById('productDesId').value,
        productExpire : document.getElementById('productExpId').value,
        productQty : document.getElementById('productQtyId').value,
      }
  });
  }  

  render() {
    return (
      <div className="App">
        <h1>Update Product Details</h1>
        <div class="card">
          <div class="card-body">
            <lable>Product Name : </lable>
            <input
              id="productNameId"
              type="text"
              className="form-control"
              value={this.state.product.productName}
              onChange={(event) => this.setProductName(event.target.value)}
              style={{backgroundColor: '#f1f1f1'}}
              required
            />

            <lable>Product Price : </lable>
            <input
            id="productPriceId"
              type="text"
              className="form-control"
              value={this.state.product.productPrice}
              onChange={(event) => this.setProductName(event.target.value)}
              style={{backgroundColor: '#f1f1f1'}}
              required
            />
            
            <lable>Product Description : </lable>
           <input
              id="productDesId"
              type="text"
              className="form-control"
              value={this.state.product.productDes}
              onChange={(event) => this.setProductName(event.target.value)}
              style={{backgroundColor: '#f1f1f1'}}
              required
            />
            
            <lable>Product Expirary Date : </lable>
            <input
            id="productExpId"
              type="date"
              className="form-control"
              value={this.state.product.productExpire}
              onChange={(event) => this.setProductName(event.target.value)}
              style={{backgroundColor: '#f1f1f1'}}
              required
            />
            
            <lable>Product Quantity : </lable>
            <input
            id="productQtyId"
              type="text"
              className="form-control"
              value={this.state.product.productQty}
              onChange={(event) => this.setProductName(event.target.value)}
              style={{backgroundColor: '#f1f1f1'}}
              required
            />
            
          </div>

          <button type="submit" className="btn btn-success"  onClick={ () =>this.postProduct() }>
              Add Product
            </button>
                  </div>
      </div>
    )
  }
}

export default Addproduct;
