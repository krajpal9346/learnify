import { securityFeaturesData } from "../../data/auth/securityFeaturesData";
import SecurityFeatureCard from "./SecurityFeatureCard";

const SecurityFeatures = () => {
    return (
        <section className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-3">
            {securityFeaturesData.map((feature) => (
                <SecurityFeatureCard key={feature.title} feature={feature} />
            ))}
        </section>
    );
};

export default SecurityFeatures;