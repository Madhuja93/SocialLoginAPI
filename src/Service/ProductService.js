import axios from "axios";

const API_Base_URL = "http://localhost:8070/product/product";
class ProductService {
  viewProducts() {
    console.log("All the products have been Received from Service");
    return axios.get(API_Base_URL);
  }

  deleteProduct(productId) {
    console.log("Product is Deleted Successfully from Service" + productId);
    return axios.delete(API_Base_URL + "/" + productId);
  }

  searchProductById(productId) {
    console.log("Search Product By Id" + productId);
    return axios.get(API_Base_URL + "/" + productId);
  }

  saveProduct(product) {
    console.log("Products are saved successfully in service");
    return axios.post(API_Base_URL, product);
  }

  //Webhook API
  sendMessage(message) {
    console.log("This is from Webhook Service" + JSON.stringify(message));
    return axios.post("http://localhost:8080/mdse/webhook/Madhuja", message);
  }
}

export default new ProductService();
