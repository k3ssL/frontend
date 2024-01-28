import React from 'react';
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import BrandDifferent from "../components/BrandDifferent/BrandDifferent";
import Ceramics from "../components/Ceramics/Ceramics";
import PopularProducts from "../components/PopularProducts/PopularProducts";
import JoinForm from "../components/JoinForm/JoinForm";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <BrandDifferent/>
            <Ceramics/>
            <PopularProducts/>
            <JoinForm/>
            <GetInTouch/>
            <Footer/>
        </div>
    );
};

export default HomePage;