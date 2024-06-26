import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes, useRoutes} from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import MerchItemAdd from "./components/MerchItemAdd/MerchItemAdd";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import PaymentCancel from "./pages/Payment/PaymentCancel.jsx";
import PaymentError from "./pages/Payment/PaymentError.jsx";
import PaymentSuccess from "./pages/Payment/PaymentSuccess.jsx";
import {Toaster} from "react-hot-toast";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameApp, setUsernameApp] = useState("");

  const [showItemAdd, setShowItemAdd] = useState(false);

  return (

    // <>
    //   {showLogin ? (
    //     <LoginPopup
    //       setShowLogin={setShowLogin}
    //       setIsLoggedIn={setIsLoggedIn}
    //       setUsernameApp={setUsernameApp}
    //     />
    //   ) : (
    //     <></>
    //   )}
    //   <>
    //   {showItemAdd ? (
    //     <MerchItemAdd 
    //       setShowItemAdd={setShowItemAdd} 
    //     />
    //   ) : (
    //     <></>
    //   )}
    <>
      <Toaster/>
      {showLogin && (
        <LoginPopup
          setShowLogin={setShowLogin}
          setIsLoggedIn={setIsLoggedIn}
          setUsernameApp={setUsernameApp}
        />
      )}
      {showItemAdd && (
        <MerchItemAdd setShowItemAdd={setShowItemAdd} />
      )}
        <div className="app">
          <Navbar
            setShowLogin={setShowLogin}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            username={usernameApp}
          />
          <Routes>
            {/* If user not logged in */}
            <Route path="/" element={<Home setShowItemAdd={setShowItemAdd}/>} />
            {/* if user logged in */}
            <Route
              path={`/:username`}
              element={<Home setShowItemAdd={setShowItemAdd} appUsername={usernameApp} />}
            />
            <Route path={`${usernameApp}/cart`} element={<Cart appUsername={usernameApp}/>} />
            <Route path={`${usernameApp}/order`} element={<PlaceOrder appUsername={usernameApp}/>} />
            <Route path={`/products/:id`} element={<ProductDetails appUsername={usernameApp}/>}/>
            <Route path="/product" element={<ProductDetails/>}/>
            <Route path="*" element={<div>404: Page not found</div>} />
            <Route path="/payment/success" element={<PaymentSuccess/>} />
            <Route path="/payment/error" element={<PaymentError/>}/>
            <Route path="payment/cancel" element={<PaymentCancel/>}/>
          </Routes>

        </div>
        <Footer />
      </>
  );
};

export default App;
