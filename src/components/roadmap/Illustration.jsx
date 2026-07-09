import flag from "../../assets/flag.png";
import { roadmapIllustrationData } from "../../data/roadmap/roadmapIllustrationData";

const Illustration = () => {
    return (
        <div className="relative flex w-full items-center justify-center h-80 sm:h-90 lg:h-105 xl:h-90 xl:w-1/2">
            {roadmapIllustrationData.map((item) => {
                const Icon = item.icon;

                return (
                    <div key={item.position} className={`absolute ${item.position} z-10 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-xl border border-gray-300 bg-white shadow-md`}>
                        <Icon size={32} color={item.color} className={item.rotate ? "rotate-90" : ""} />
                    </div>
                );
            })}

            <img src={flag} alt="Learning Journey" className="absolute left-1/2 top-1/2 z-20 h-28 sm:h-36 lg:h-44 xl:h-56 scale-150 -translate-x-1/2 -translate-y-1/2 object-contain" />
        </div>
    );
};

export default Illustration;