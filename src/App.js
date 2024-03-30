import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail'
import CartPage from './containers/CartPage';
import { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="App">
      <Router>
      <Header setSelectedCategory={setSelectedCategory}/>

      <Routes>

      <Route path = "/" element ={<ProductListing />}></Route>
      <Route exact path="/category/:category" element={<ProductListing selectedCategory={selectedCategory}/>} />
      <Route path = "/product/:productId" element = {<ProductDetail/>}></Route>
      <Route path = "/cartpage" element = {<CartPage/>}></Route>
      <Route path="*" element={<h1>404 Not Found!</h1>} />
      



      </Routes>




      </Router>
   
    </div>
  );
}

export default App;
