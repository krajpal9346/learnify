import Categories from "../components/home/Categories";
import Hero from "../components/home/Hero";
import Ready from "../components/home/Ready";
import Subscribe from "../components/home/Subscribe";
import Why from "../components/home/Why";
import Working from "../components/home/Working";

const Home = () => {
    return (
        <>
            <Hero />
            <Working />
            <Categories />
            <Why />
            <Ready />
            <Subscribe />
        </>
    );
};

export default Home;