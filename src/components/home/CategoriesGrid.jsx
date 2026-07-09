import SectionHeader from "../common/SectionHeader";
import { categoriesData } from "../../data/shared/categoriesData";

const CategoriesGrid = () => {
    return (
        <div className="w-full xl:w-1/2 flex flex-col gap-6">
            <SectionHeader badge="Explore Top Categories" title="Popular Learning Paths" align="center" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5 gap-5">
                {categoriesData.map((category) => {
                    const Icon = category.icon;

                    return (
                        <article key={category.title} className="xl:h-50 rounded-xl border border-gray-300 bg-white p-4 flex flex-col gap-4 hover:shadow-md transition-all duration-300">
                            <div className={`flex h-16 w-16 items-center shrink-0 justify-center rounded-xl ${category.bg}`}>
                                <Icon size={34} color={category.color} aria-hidden="true" />
                            </div>

                            <div className="flex flex-col h-full justify-between">
                                <h3 className="text-lg font-bold leading-7">{category.title}</h3>
                                <p className="text-sm text-gray-600">{category.courses}</p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoriesGrid;