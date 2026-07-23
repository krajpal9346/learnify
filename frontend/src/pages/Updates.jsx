import { useState } from "react";
import Hero from "../components/updates/Hero";
import UpdatesList from "../components/updates/UpdatesList";
import LoadMoreButton from "../components/updates/LoadMoreButton";
import { updatesData } from "../data/updates/updatesData";

const Updates = () => {
    const [visibleUpdates, setVisibleUpdates] = useState(4);
    const hasMoreUpdates = visibleUpdates < updatesData.length;

    const loadMoreUpdates = () => {
        setVisibleUpdates((previous) => previous + 4);
    };

    return (
        <main>
            <Hero />
            <UpdatesList visibleUpdates={visibleUpdates} />
            <LoadMoreButton hasMoreUpdates={hasMoreUpdates} loadMoreUpdates={loadMoreUpdates} />
        </main>
    );
};

export default Updates;