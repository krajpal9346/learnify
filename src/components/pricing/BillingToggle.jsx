const BillingToggle = ({ billingCycle, setBillingCycle }) => {
    return (
        <div className="flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-sm">
            <button type="button" onClick={() => setBillingCycle("monthly")} className={`rounded-full px-4 sm:px-5 py-2 text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer ${billingCycle === "monthly" ? "bg-[#6044da] text-white" : "text-gray-600 hover:text-[#6044da]"}`}>
                Monthly
            </button>

            <button type="button" onClick={() => setBillingCycle("yearly")} className={`rounded-full px-4 sm:px-5 py-2 text-sm sm:text-base font-medium transition-all duration-300 cursor-pointer ${billingCycle === "yearly" ? "bg-[#6044da] text-white" : "text-gray-600 hover:text-[#6044da]"}`}>
                Yearly
            </button>
        </div>
    );
};

export default BillingToggle;