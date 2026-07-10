import { ShieldCheck } from "lucide-react";
import { tableOfContentsData } from "../../data/privacy/tableOfContentsData";

const TableOfContents = ({ activeSection }) => {
    const scrollToSection = (id) => {
        const element = document.getElementById(`policy-${id}`);
        if (!element) return;
        const headerOffset = 110;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };

    return (
        <aside className="w-full lg:w-1/4">
            <div className="sticky top-28 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-bold">On this page</h2>
                </div>

                <div className="mt-5 flex flex-col gap-2">
                    {tableOfContentsData.map((item) => (
                        <button key={item.id} type="button" onClick={() => scrollToSection(item.id)} className={`rounded-lg px-3 py-2 text-left transition-all duration-300 ${activeSection === item.id ? "bg-purple-100 font-semibold text-[#6044da]" : "text-gray-700 hover:bg-purple-50 hover:text-[#6044da]"}`}>
                            {item.id}. {item.title}
                        </button>
                    ))}

                    <div className="mt-6 flex flex-col items-center gap-4 rounded-xl bg-purple-100 p-5 text-center xl:flex-row xl:text-left">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white">
                            <ShieldCheck size={28} color="#6044da" aria-hidden="true" />
                        </div>

                        <p className="text-sm leading-6 text-gray-700">We follow industry-standard security practices to keep your data protected.</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default TableOfContents;