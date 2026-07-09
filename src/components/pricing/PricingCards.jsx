import { pricingData } from "../../data/pricing/pricingData";
import PricingCard from "./PricingCard";

const PricingCards = ({ billingCycle }) => {
    return (
        <section className="px-4 sm:px-8 lg:px-12 xl:px-20 py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                {pricingData.map((plan) => (
                    <PricingCard key={plan.title} plan={plan} billingCycle={billingCycle} />
                ))}
            </div>
        </section>
    );
};

export default PricingCards;