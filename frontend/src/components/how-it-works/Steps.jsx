import { ArrowRight } from "lucide-react";
import { Fragment } from "react";
import { howItWorksData } from "../../data/how-it-works/howItWorksData";
import StepCard from "./StepCard";

const Steps = () => {
    return (
        <section className="px-4 sm:px-8 lg:px-12 xl:px-20">
            <div className="flex flex-col items-center justify-between xl:flex-row gap-4">
                {howItWorksData.map((step, index) => (
                    <Fragment key={step.step}>
                        <StepCard step={step} />

                        {index !== howItWorksData.length - 1 && (
                            <div className="flex items-center justify-center">
                                <ArrowRight size={34} color="#6044da" className="rotate-90 xl:rotate-0" aria-hidden="true" />
                            </div>
                        )}
                    </Fragment>
                ))}
            </div>
        </section>
    );
};

export default Steps;