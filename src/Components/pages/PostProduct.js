import React, { Component } from 'react'
import ProductService from '../Service/ProductService'
import '../PostProduct.css'

export class PostProduct extends Component {
constructor(props) {
  super(props)

  this.state = {
    productName:'',
    productPrice:'',
    productDes:'',
    productExpire:'',
    productQty:''
  }
}

productNameChangeHandler = (event) =>{
    this.setState({
        productName:event.target.value
      })
}

productPriceChangeHandler = (event) =>{
    this.setState({
        productPrice:event.target.value
      })
}

productDesChangeHandler = (event) =>{
    this.setState( {
        productDes:event.target.value
      })
}

productExpireChangeHandler = (event) =>{
    this.setState({
        productExpire:event.target.value
      })
}

productQtyChangeHandler = (event) =>{
    this.setState({
        productQty:event.target.value
      })
}

saveProduct(){
    let product = {
        productName: this.state.productName,
        productPrice: this.state.productPrice,
        productDes: this.state.productDes,
        productExpire: this.state.productExpire,
        productQty: this.state.productQty,
    }

    ProductService.saveProduct(product)
    .then( (response) => {
        console.log("Products are saved successfully" + JSON.stringify(response))
        this.props.history.push(`/products`)
    })
}
  render() {
    return (
      <div>
              <section id="registration-page">
                <form class="signup-form">
                    <div class="form-header">
                        <h1>BUY PRODUCTS </h1>
                    </div>
                    
                    <div class="form-body">
                        
                        <div class="row">
                            <div class="input-group">
                                <label>Product Name</label>
                                <input type="text" placholder="Enter Product Name"
                                value={this.state.productName} onChange={this.productNameChangeHandler}/>
                            </div>
                            <div class="input-group">
                                <label>Product Price</label>
                                <input type="text" placholder="Enter Product Price"
                                value={this.state.productPrice} onChange={this.productPriceChangeHandler}/>
                            </div>
                        </div>
                       
                        <div class="row">
                            <div class="input-group">
                                <label>Product Description</label>
                                <input type="text" placholder="Enter Product Description"
                                value={this.state.productDes} onChange={this.productDesChangeHandler}/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-group">
                                <label>Proudct Expire Date </label>
                                <input type="text" placholder="Enter Product Expire Date"
                                value={this.state.productExpire} onChange={this.productExpireChangeHandler}/>
                            </div>
                            <div class="input-group">
                                <label>Product Quantity</label>
                                <input type="number" placholder="Enter Product Quantity"
                                value={this.state.productQty} onChange={this.productQtyChangeHandler}/>
                            </div>
                        </div>
                       
                    </div>
                    <div class="form-footer">
                        <button class="btn" onClick={ () => this.saveProduct() }>SUBMIT</button>
                    </div>
                </form>
            </section>

      </div>
    )
  }
}

export default PostProduct