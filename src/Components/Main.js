import React from "react";
import Header from "./Header/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";

import { Route } from "react-router-dom";
import Footer from "./Footer/Footer";

const Main = (props) => {
    return (
        <div>
            <Header />
            <div className="container pt-5" style={{ minHeight: "75.4vh" }}>
                <Route path="/orders" component={Orders} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/" exact component={BurgerBuilder} />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
