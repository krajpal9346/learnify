import { useState } from "react";
import Hero from "../components/pricing/Hero";
import PricingCards from "../components/pricing/PricingCards";
import ComparisonTable from "../components/pricing/ComparisonTable";
import CTA from "../components/pricing/CTA";

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState("monthly");
    const [selectedPlan, setSelectedPlan] = useState(null);

    return (
        <main className="pb-10">
            <Hero billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
            <PricingCards billingCycle={billingCycle} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
            <ComparisonTable billingCycle={billingCycle} />
            <CTA />
        </main>
    );
};

export default Pricing;