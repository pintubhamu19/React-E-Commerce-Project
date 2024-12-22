
import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Offers/Offers";
import NewCollection from "../Components/NewCollection/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import ShopCategory from "./ShopCategory";
// import Footer from "../Components/Footer/Footer";

export default function Shop(){
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollection/>
            <NewsLetter/>
            {/* <ShopCategory/> */}
        </div>
    );
}

