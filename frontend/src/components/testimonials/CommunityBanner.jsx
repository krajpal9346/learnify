import { UsersRound } from "lucide-react";

const avatars = [
    "https://i.pinimg.com/originals/f8/19/e4/f819e4d4f5b6a266a71f8a5248003e39.jpg",
    "https://i.pinimg.com/originals/99/8f/41/998f41fc4c63e69c06b99a6e03629815.jpg",
    "https://aita-lab.github.io/images/Members/Alumni/ttduong/avatar.jpg",
    "https://pochunhsu.group/wp-content/uploads/2023/02/2022.03.090266-1459x1536.jpg",
    "https://i.pinimg.com/originals/f8/19/e4/f819e4d4f5b6a266a71f8a5248003e39.jpg",
    "https://i.pinimg.com/originals/99/8f/41/998f41fc4c63e69c06b99a6e03629815.jpg",
];

const CommunityBanner = () => {
    return (
        <section className="px-4 sm:px-8 lg:px-12 xl:px-20 pb-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 rounded-2xl bg-purple-100 px-6 py-8 lg:px-10 xl:px-14">
                <div className="flex w-full items-center gap-5 lg:gap-7 lg:w-[55%]">
                    <div className="flex h-14 w-14 xl:h-18 xl:w-18 shrink-0 items-center justify-center rounded-full bg-[#6044da]">
                        <UsersRound size={30} color="#ffffff" strokeWidth={2.75} aria-hidden="true" />
                    </div>

                    <h3 className="text-lg font-bold leading-snug xl:text-3xl">Join a growing community of learners building skills every single day.</h3>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-5 lg:gap-7">
                    <div className="flex -space-x-3">
                        {avatars.map((avatar, index) => (
                            <img key={index} src={avatar} alt="Community member" className="h-9 w-9 sm:h-10 sm:w-10 xl:h-15 xl:w-15 rounded-full border-2 border-white object-cover" />
                        ))}

                        <div className="flex h-9 w-9 sm:h-10 sm:w-10 xl:h-15 xl:w-15 items-center justify-center rounded-full border-2 border-white bg-white text-[10px] sm:text-xs xl:text-base font-bold text-[#6044da]">
                            +10K
                        </div>
                    </div>

                    <p className="max-w-37.5 text-center text-sm text-gray-700 xl:text-base">and thousands more worldwide</p>
                </div>
            </div>
        </section>
    );
};

export default CommunityBanner;