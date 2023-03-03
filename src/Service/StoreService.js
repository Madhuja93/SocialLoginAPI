import axios from "axios";

const API_Base_URL = "http://localhost:8070/store/store";
class StoreService {
  viewStores() {
    console.log("All the stores have been Received from Service");
    return axios.get(API_Base_URL);
  }

  deleteStore(storeId) {
    console.log("Store is Deleted Successfully from Service" + storeId);
    return axios.delete(API_Base_URL + "/" + storeId);
  }

  searchStoreById(storeId) {
    console.log("Search Store By Id" + storeId);
    return axios.get(API_Base_URL + "/" + storeId);
  }

  saveStore(store) {
    console.log("Stores are saved successfully in service");
    return axios.post(API_Base_URL, store);
  }
}

export default new StoreService();
