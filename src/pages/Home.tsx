/* eslint-disable jsx-a11y/anchor-is-valid */
import Footer from "components/Footer";
import Header from "components/Header";
import Hero from "components/Hero";
import MainContent from "components/MainContent";

import './Home.scss';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <MainContent />
            <Footer />
        </>
    );
}

export default Home;