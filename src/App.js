import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import SignUp from './Components/pages/SignUp';
import SignIn from './Components/pages/SignIn';
import Stores from './Components/pages/Stores';
import Connect from './Components/pages/Connect';
import Products from './Components/pages/Products'
import Viewproduct from './Components/pages/Viewproduct';
import Updateproduct from './Components/pages/Updateproduct';
import Addproduct from './Components/pages/Addproduct';
import SlackComponent from './Components/pages/SlackComponent';
import About from './Components/pages/About';
import Footer from './Components/Footer';
import PrivacyNotice from './Components/pages/PrivacyNotice';


function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/stores">
          <Stores> </Stores>
        </Route>
        <Route path="/products">
          <Products> </Products>
        </Route>
     
        <Route exact path="/viewProductDetails/:productId" render={(props) => (
    <Viewproduct productId={props.match.params.productId}/>
)} />
   <Route exact path="/updateProductDetails/:productId" render={(props) => (
    <Updateproduct productId={props.match.params.productId}/>
)} />
     <Route path='/addProductDetails' component={Addproduct} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/about' component={About} />
        <Route path='/connect' component={Connect} />
        <Route path="/slack">
              <SlackComponent></SlackComponent>
            </Route>
            <Route path='/sign-in' component={SignIn} />
            <Route path="/privacyNotice">
              <PrivacyNotice></PrivacyNotice>
            </Route>
            <Route path="/footer"></Route>
            <Footer></Footer>
            </Switch>
            
        
    </Router>
    </>
  );
}

export default App;
