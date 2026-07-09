import { termsOfServiceData } from "../../data/terms/termsOfServiceData";
import TermsCard from "./TermsCard";

const TermsSections = () => {
    return (
        <section className="w-full lg:w-3/4">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                {termsOfServiceData.map((term, index) => (
                    <TermsCard key={term.id} icon={term.icon} iconColor={term.iconColor} title={`${term.id}. ${term.title}`} description={term.description} isLast={index === termsOfServiceData.length - 1} />
                ))}
            </div>
        </section>
    );
};

export default TermsSections;