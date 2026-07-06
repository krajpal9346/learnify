import Categories from "../components/ui/Categories";
import Hero from "../components/ui/Hero";
import Ready from "../components/ui/Ready";
import Subscribe from "../components/ui/Subscribe";
import Why from "../components/ui/Why";
import Working from "../components/ui/Working";

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