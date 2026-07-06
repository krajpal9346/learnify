import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

export default MainLayout;