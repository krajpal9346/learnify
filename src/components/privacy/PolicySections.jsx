import { privacyPolicyData } from "../../data/privacy/privacyPolicyData";
import PolicyCard from "./PolicyCard";

const PolicySections = () => {
    return (
        <section className="w-full lg:w-3/4">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                {privacyPolicyData.map((policy, index) => (
                    <PolicyCard key={policy.id} icon={policy.icon} iconColor={policy.iconColor} title={`${policy.id}. ${policy.title}`} description={policy.description} isLast={index === privacyPolicyData.length - 1} />
                ))}
            </div>
        </section>
    );
};

export default PolicySections;