import { timelineData } from "../../data/about/timelineData";

const StoryTimeline = () => {
    return (
        <>
            <div className="relative hidden h-80 xl:block xl:w-3/5">
                {timelineData.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div key={item.title} className={item.desktopPosition}>
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                                <Icon size={32} color={item.iconColor} aria-hidden="true" />
                            </div>

                            <h3 className="font-bold text-[#6044da]">{item.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-gray-700">{item.description}</p>
                        </div>
                    );
                })}
            </div>

            <div className="flex w-full flex-col gap-8 xl:hidden">
                {timelineData.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div key={item.title} className="relative flex gap-5">
                            <div className="flex flex-col items-center">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
                                    <Icon size={28} color={item.iconColor} aria-hidden="true" />
                                </div>

                                {index !== timelineData.length - 1 && (<div className="mt-2 h-12 w-1 rounded-full bg-[#6044da]/30" />)}
                            </div>

                            <div className="pb-3">
                                <h3 className="text-lg font-bold text-[#6044da]">{item.title}</h3>
                                <p className="mt-2 leading-7 text-gray-700">{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default StoryTimeline;