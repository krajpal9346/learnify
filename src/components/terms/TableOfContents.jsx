import { ShieldCheck } from "lucide-react";
import { tableOfContentsData } from "../../data/terms/tableOfContentsData";

const TableOfContents = () => {
    return (
        <aside className="w-full lg:w-1/4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-bold">On this page</h2>
                </div>

                <div className="mt-5 flex flex-col gap-4">
                    {tableOfContentsData.map((item) => (
                        <button key={item.id} type="button" className="cursor-pointer text-left text-gray-700 transition-colors duration-200 hover:text-[#6044da]">
                            {item.id}. {item.title}
                        </button>
                    ))}

                    <div className="mt-6 flex flex-col items-center gap-4 rounded-xl bg-purple-100 p-5 text-center lg:flex-row sm:text-left">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white">
                            <ShieldCheck size={28} color="#6044da" aria-hidden="true" />
                        </div>

                        <p className="text-sm leading-6 text-gray-700">By using Learnify AI, you agree to these Terms of Service and our community guidelines.</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default TableOfContents;