import { feedbackTypesData } from "../../data/feedback/feedbackTypesData";
import FeedbackTypeCard from "./FeedbackTypeCard";

const FeedbackTypeSelector = ({ selectedType, onSelect }) => {
    return (
        <div className="flex flex-col gap-4">
            <label className="text-lg font-bold">
                What is your feedback about?
                <span className="ml-1 text-red-600">*</span>
            </label>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
                {feedbackTypesData.map((type) => (
                    <FeedbackTypeCard key={type.id} type={type} selected={selectedType === type.title} onClick={() => onSelect(type.title)} />
                ))}
            </div>
        </div>
    );
};

export default FeedbackTypeSelector;