import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router,
  Routes,
   Route,
   Navigate
  } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
function App() {
  const user= useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route exact path="/" element={  <Home/>}/>
          <Route  path="/products/:category" element={ <ProductList/>}/>
          <Route  path="/product/:id" element={ <Product/>}/>
          <Route  path="/register" element={ user ? <Navigate to="/"/> :<Register/>}/>
          <Route  path="/cart" element={ <Cart/>}/>
          <Route  path="/success" element={ <Success/>}/>
          <Route  path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
        </Routes>

  
  
   </Router>

    </div>
  );
}

export default App;
