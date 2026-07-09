import SectionHeader from "../common/SectionHeader";
import FeatureCard from "./FeatureCard";
import { featuresData } from "../../data/features/featuresData";

const FeaturesGrid = ({ onSelect }) => {
    return (
        <section className="px-4 sm:px-8 lg:px-12 xl:px-20 py-5">
            <div className="flex flex-col items-center gap-6">
                <SectionHeader title="Explore our core features" description="Everything you need to personalize, track, and elevate your learning journey." align="center" />

                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {featuresData.map((feature) => (
                        <FeatureCard key={feature.id} feature={feature} onSelect={onSelect} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;