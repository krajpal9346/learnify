import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import DashboardLayout from "../components/layouts/DashboardLayout";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ScrollToTop from "../components/common/ScrollToTop";
import AboutUs from "../pages/AboutUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import Community from "../pages/Community";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import MyLearning from "../pages/MyLearning";
import DashboardRoadmap from "../pages/DashboardRoadmap";
import Achievements from "../pages/Achievements";
import Profile from "../pages/Profile";

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
                    <Route path={ROUTES.CONTACT} element={<Contact />} />
                </Route>

                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.STARTED} element={<Started />} />
                <Route
                    path={ROUTES.FORGOT_PASSWORD}
                    element={<Navigate to={ROUTES.LOGIN} replace />}
                />

                <Route
                    element={
                        <ProtectedRoute>
                            <DashboardLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                    <Route path={ROUTES.MY_LEARNING} element={<MyLearning />} />
                    <Route path={ROUTES.DASHBOARD_ROADMAP} element={<DashboardRoadmap />} />
                    <Route path={ROUTES.ACHIEVEMENTS} element={<Achievements />} />
                    <Route path={ROUTES.PROFILE} element={<Profile />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
