import { updatesData } from "../../data/updates/updatesData";
import UpdateCard from "./UpdateCard";

const UpdatesList = ({ visibleUpdates }) => {
    const displayedUpdates = updatesData.slice(0, visibleUpdates);

    return (
        <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-20 py-10">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 lg:gap-8">
                {displayedUpdates.map((update) => (
                    <UpdateCard key={update.title} update={update} />
                ))}
            </div>
        </section>
    );
};

export default UpdatesList;