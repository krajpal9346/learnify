import { signupFeaturesData } from "../../data/auth/signupFeaturesData";
import SignupFeatureCard from "./SignupFeatureCard";

const SignupFeatures = () => {
    return (
        <section className="flex flex-col gap-5">
            {signupFeaturesData.map(
                (feature) => (
                    <SignupFeatureCard key={feature.title} feature={feature} />
                )
            )}
        </section>
    );
};

export default SignupFeatures;