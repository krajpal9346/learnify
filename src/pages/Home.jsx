import Categories from "../components/Categories"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Ready from "../components/Ready"
import Subscribe from "../components/Subscribe"
import Why from "../components/Why"
import Working from "../components/Working"

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Working />
            <Categories />
            <Why />
            <Ready />
            <Subscribe />
            <Footer />
        </>
    )
}

export default Home