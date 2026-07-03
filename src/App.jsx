import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Started from "./pages/Started"
import Features from "./pages/Features"
import HowItWorks from "./pages/HowItWorks"
import Roadmap from "./pages/Roadmap"
import Testimonials from "./pages/Testimonials"
import Pricing from "./pages/Pricing"
import FAQs from "./pages/FAQs"
import Updates from "./pages/Updates"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/started" element={<Started />} />
                <Route path="/features" element={<Features/>}/>
                <Route path="/how-it-works" element={<HowItWorks/>}/>
                <Route path="/roadmap" element={<Roadmap/>}/>
                <Route path="/testimonials" element={<Testimonials/>}/>
                <Route path="/pricing" element={<Pricing/>}/>
                <Route path="/faqs" element={<FAQs/>}/>
                <Route path="/updates" element={<Updates/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App