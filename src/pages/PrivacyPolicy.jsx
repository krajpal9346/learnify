import { Calendar, ShieldCogCorner } from "lucide-react"

const PrivacyPolicy = () => {
    return (
        <section className="pt-20">
            <div className="flex gap-20 px-30 py-10 bg-purple-50">
                <div className="w-1/2 flex flex-col gap-5">
                    <div className="flex gap-2 px-3 py-1 rounded-full w-fit bg-purple-200">
                        <p className="font-semibold text-[#6044da] text-sm sm:text-base">Privacy Policy</p>
                    </div>

                    <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight">Your privacy is <span className="text-[#6044da]">our priority</span></h1>
                    <p className="text-gray-600 text-sm sm:text-base mt-3">At Learnify AI, we are committed to protecting your personal informtion and being transparent about how we collect, use and safeguard your data.</p>
                    <div className="bg-purple-200 rounded-xl mt-2 items-center text-gra-700 flex gap-2 px-5 py-3 w-fit">
                        <Calendar color="#6044da" size={20}/>
                        Last updated: May 15, 2026
                    </div>
                </div>

                <div className="w-1/2 h-80 flex items-center justify-center">
                    <ShieldCogCorner color="#6044da" size={220} />
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy