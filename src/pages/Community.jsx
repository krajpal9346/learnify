import { Search } from "lucide-react"
import girl from "../assets/girl.png"

const Community = () => {
  return (
    <section className="pt-20">
      <div className="flex gap-20 px-30 py-10 bg-purple-50">
        <div className="w-1/2 flex flex-col gap-5">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight">Learn Together. <br /><span className="text-[#6044da]">Grow Together.</span></h1>
          <p className="text-gray-600 text-sm sm:text-base mt-3">Join a community of curious learners, share knowledge , ask questions, and grow together.</p>
          <div className="flex w-full">
            <input type="text" placeholder="Search topics, questions or people..." className="border border-gray-300 px-5 py-2 rounded-l-lg w-full" />
            <div className="w-15 bg-[#6044da] rounded-r-lg flex items-center justify-center">
              <Search color="#ffffff" size={22} />
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-500">Popular:</p>
            <div className="bg-purple-200 text-[#6044da] rounded-full py-1 px-3">
              Study Tips
            </div>
            <div className="bg-purple-200 text-[#6044da] rounded-full py-1 px-3">
              AI & ML
            </div>
            <div className="bg-purple-200 text-[#6044da] rounded-full py-1 px-3">
              Web Development
            </div>
            <div className="bg-purple-200 text-[#6044da] rounded-full py-1 px-3">
              Career
            </div>
            <div className="bg-purple-200 text-[#6044da] rounded-full py-1 px-3">
              Resources
            </div>
          </div>
        </div>

        <div className="w-1/2 h-80 flex items-center justify-center">
          <img src={girl} className="h-90" />
        </div>
      </div>
    </section>
  )
}

export default Community