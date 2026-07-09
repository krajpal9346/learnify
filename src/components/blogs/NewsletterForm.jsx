const NewsletterForm = ({ handleNewsletterSubmit, }) => {
    return (
        <form onSubmit={handleNewsletterSubmit} className="flex w-full max-w-2xl flex-col gap-4 sm:flex-row">
            <input type="email" placeholder="Enter your email" className="flex-1 rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20 sm:py-4 sm:text-base" />

            <button type="submit" className="w-full cursor-pointer rounded-xl bg-[#6044da] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#5137c9] hover:shadow-lg sm:w-auto sm:px-8 sm:py-4">
                Subscribe
            </button>
        </form>
    );
};

export default NewsletterForm;