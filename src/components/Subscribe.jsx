const Subscribe = () => {
    return (
        <div className="px-5 sm:px-10 xl:px-25 pt-10 xl:pt-15">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-5 border border-gray-200 rounded-xl px-6 sm:px-10 py-6">
                <div className="flex flex-col justify-center gap-3 text-center lg:text-left">
                    <h1 className="text-2xl xl:text-3xl font-bold">Stay updated with Learnify AI</h1>
                    <p className="text-gray-600">Get the latest courses, tips and updates delivered to your inbox.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                    <input type="email" placeholder="Enter your email" className="w-full sm:w-72 px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#6044da]"/>
                    <button className="cursor-pointer bg-[#6044da] text-white font-semibold rounded-lg px-6 py-3 whitespace-nowrap">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;