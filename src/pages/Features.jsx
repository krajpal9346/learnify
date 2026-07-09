import { useState } from "react";
import Hero from "../components/features/Hero";
import FeaturesGrid from "../components/features/FeaturesGrid";
import SecuritySection from "../components/features/SecuritySection";
import FeatureModal from "../components/features/FeatureModal";

const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState(null);

    return (
        <main>
            <Hero />
            <FeaturesGrid onSelect={setSelectedFeature} />
            <SecuritySection />
            <FeatureModal feature={selectedFeature} onClose={() => setSelectedFeature(null)} />
        </main>
    );
};

export default Features;