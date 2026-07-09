import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "../data/routes";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Started from "../pages/Started";
import Features from "../pages/Features";
import HowItWorks from "../pages/HowItWorks";
import Roadmap from "../pages/Roadmap";
import Testimonials from "../pages/Testimonials";
import Pricing from "../pages/Pricing";
import FAQs from "../pages/FAQs";
import Updates from "../pages/Updates";
import Blogs from "../pages/Blogs";
import HelpCenter from "../pages/HelpCenter";
import Feedback from "../pages/Feedback";
import NotFound from "../pages/NotFound";
import MainLayout from "../components/layouts/MainLayout";
import ScrollToTop from "../components/common/ScrollToTop";
import AboutUs from "../pages/AboutUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import Community from "../pages/Community";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.FEATURES} element={<Features />} />
                    <Route path={ROUTES.HOW_IT_WORKS} element={<HowItWorks />} />
                    <Route path={ROUTES.ROADMAP} element={<Roadmap />} />
                    <Route path={ROUTES.TESTIMONIALS} element={<Testimonials />} />
                    <Route path={ROUTES.PRICING} element={<Pricing />} />
                    <Route path={ROUTES.FAQS} element={<FAQs />} />
                    <Route path={ROUTES.UPDATES} element={<Updates />} />
                    <Route path={ROUTES.BLOGS} element={<Blogs />} />
                    <Route path={ROUTES.HELP_CENTER} element={<HelpCenter />} />
                    <Route path={ROUTES.FEEDBACK} element={<Feedback />} />
                    <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
                    <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
                    <Route path={ROUTES.TERMS_OF_SERVICE} element={<TermsOfService />} />
                    <Route path={ROUTES.COMMUNITY} element={<Community />} />
                </Route>

                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.STARTED} element={<Started />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;