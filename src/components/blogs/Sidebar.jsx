import PopularPosts from "./PopularPosts";
import ContributorCard from "./ContributorCard";

const Sidebar = () => {
    return (
        <aside className="flex w-full flex-col gap-6 lg:gap-8 xl:w-2/9">
            <PopularPosts />
            <ContributorCard />
        </aside>
    );
};

export default Sidebar;