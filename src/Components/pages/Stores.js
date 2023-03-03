import React , { Component } from 'react';
import '../../App.css';
import StoreService from "../../Service/StoreService";

  export class Stores extends Component {
  
    constructor(props) {
      super(props);
  
      this.state = {
        store: [],
      };
  
    }
  
    componentDidMount() {
      StoreService.viewStores()
      .then((response) => {
        debugger;
        console.log("Store from Store Component" + JSON.stringify(response));
        this.setState({
          store: response.data,
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
  
    deleteStore(storeId) {
      StoreService.deleteStore(storeId)
      .then((response) => {
        console.log("Deleted Product From Component");
        this.setState({
          products: this.state.store.filter(
            (store) => store.storeId !== storeId
          ),
        });
        this.props.history.push(`/store`);
      });
    }
  
    getProductId(storeId) {
      debugger;
      this.props.history.push(`/viewStoreDetails/${storeId}`)
      window.location.reload();
    }
  
    postProduct (){
      this.props.history.push(`/buy`)
      window.location.reload();
  }
  
    render() {
      return (
        <div className="App">
          <br></br><h1>Stores</h1><center>
  
          <button type="button" class="btn btn-dark" onClick={ () =>this.postStore() }>Add Store</button></center>
              <hr></hr>
          <table class="table table-striped table-hover">
            <thead>
              <tr class="table-success">
                <td>Store ID</td>
                <td>Store Name</td>
                <td>Store Location</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {this.state.store.map((store) => (
                <tr class="table-secondary" key={store.storeId}>
                  <td>{store.storeId}</td>
                  <td>{store.storeName}</td>
                  <td>{store.storeLocation}</td>
                  
                  <td>
                    <button
                      type="button"
                      class="btn btn-success"
                      onClick={ () =>this.getStoreId(store.storeId)}
                    >
                      View
                    </button>
                    <button type="button" class="btn btn-secondary">
                      Update
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => this.deleteStore(store.storeId)}
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

export default Stores;