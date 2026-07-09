import { quickHelpData } from "../../data/faq/quickHelpData";
import QuickHelpCard from "./QuickHelpCard";

const QuickHelp = () => {
    return (
        <div className="flex w-full flex-col items-center gap-8">
            <h3 className="text-center text-2xl font-bold">Quick Help</h3>

            <div className="flex w-full flex-wrap items-center justify-center gap-6 lg:gap-8 xl:flex-nowrap">
                {quickHelpData.map((item) => (
                    <QuickHelpCard key={item.title} item={item} />
                ))}
            </div>
        </div>
    );
};

export default QuickHelp;