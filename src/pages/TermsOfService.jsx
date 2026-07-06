import { Calendar, ClipboardCheck } from "lucide-react"

const TermsOfService = () => {
    return (
        <section className="pt-20">
            <div className="flex gap-20 px-30 py-10 bg-purple-50">
                <div className="w-1/2 flex flex-col gap-5">
                    <div className="flex gap-2 px-3 py-1 rounded-full w-fit bg-purple-200">
                        <p className="font-semibold text-[#6044da] text-sm sm:text-base">Terms of Service</p>
                    </div>

                    <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight">Terms that build <span className="text-[#6044da]">trust and clarity.</span></h1>
                    <p className="text-gray-600 text-sm sm:text-base mt-3">These terms of Service ("Terms") govern your access to and use of Learnify AI and all related services.</p>
                    <div className="bg-purple-200 rounded-xl mt-2 items-center text-gra-700 flex gap-2 px-5 py-3 w-fit">
                        <Calendar color="#6044da" size={20} />
                        Last updated: May 15, 2026
                    </div>
                </div>

                <div className="w-1/2 h-80 flex items-center justify-center">
                    <ClipboardCheck color="#6044da" size={220} />
                </div>
            </div>
        </section>
    )
}

export default TermsOfService