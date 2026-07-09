const PopularPostCard = ({ post }) => {
    return (
        <article className="group flex items-center gap-4 rounded-xl transition-all duration-300 hover:bg-purple-50 hover:p-2">
            <img src={post.image} alt={post.title} className="h-14 w-14 shrink-0 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16" />

            <div className="flex flex-col justify-between">
                <h4 className="text-sm font-semibold leading-5 transition-colors duration-300 group-hover:text-[#6044da] sm:leading-6">{post.title}</h4>
                <p className="mt-1 text-xs text-gray-500">{post.date}</p>
            </div>
        </article>
    );
};

export default PopularPostCard;