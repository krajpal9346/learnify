import { privacyPolicyData } from "../../data/privacy/privacyPolicyData";
import PolicyCard from "./PolicyCard";

const PolicySections = ({ activeSection }) => {
    return (
        <section className="w-full lg:w-3/4">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                {privacyPolicyData.map((policy, index) => (
                    <PolicyCard key={policy.id} id={policy.id} icon={policy.icon} iconColor={policy.iconColor} title={policy.title} description={policy.description} fullDescription={policy.fullDescription} isActive={activeSection === policy.id} isLast={index === privacyPolicyData.length - 1} />
                ))}
            </div>
        </section>
    );
};

export default PolicySections;