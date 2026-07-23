import SupportCard from "./SupportCard";
import LiveChatCard from "./LiveChatCard";
import MiniFAQ from "./MiniFAQ";

const Sidebar = () => {
    return (
        <aside className="flex w-full flex-col gap-6 xl:w-1/3">
            <SupportCard />
            <LiveChatCard />
            <MiniFAQ />
        </aside>
    );
};

export default Sidebar;