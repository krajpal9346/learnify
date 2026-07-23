import { WalletCards } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import BillingToggle from "./BillingToggle";

const Hero = ({ billingCycle, setBillingCycle }) => {
    return (
        <section className="bg-purple-50 px-4 sm:px-8 lg:px-12 xl:px-20 pt-28 pb-12">
            <div className="flex flex-col items-center gap-6 text-center">
                <SectionHeader badge={
                    <>
                        <WalletCards size={16} color="#6044da" strokeWidth={2.75} aria-hidden="true" />
                        <span>Pricing Plans</span>
                    </>
                } title={
                    <>
                        Simple pricing for <br />every learner
                    </>
                }
                    description="Choose the perfect plan for your learning journey and unlock your potential with Learnify AI."
                    align="center" />

                <BillingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
            </div>
        </section>
    );
};

export default Hero;