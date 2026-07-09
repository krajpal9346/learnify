import WhyFeedbackMatters from "./WhyFeedbackMatters";
import ProcessTimeline from "./ProcessTimeline";
import ContactCard from "./ContactCard";

const Sidebar = () => {
    return (
        <aside className="flex w-full flex-col gap-6 xl:w-1/3">
            <WhyFeedbackMatters />
            <ProcessTimeline />
            <ContactCard />
        </aside>
    );
};

export default Sidebar;