import { ArrowDown, ArrowRight, Ellipsis, ExternalLink, Heart, Lightbulb, MailOpen, MessageSquare, MessageSquareHeart, Shield, ShieldCheck, Sparkles, Star, TriangleAlert, Upload, UsersRound } from "lucide-react"

const Feedback = () => {
  return (
    <section className="pt-20">
      <div className="flex flex-col gap-5 items-center px-30 py-10 bg-purple-50">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight">We'd love your <span className="text-[#6044da]">feedback!</span></h1>
        <p className="text-gray-600 text-sm sm:text-base mt-3">Your feedback helps us improve Learnify AI and create a better learning experience for you and learners like you.</p>
        <div className="bg-purple-200 rounded-xl mt-2 items-center text-gra-700 flex gap-2 px-5 py-3 w-fit">
          <div className="h-8 w-8 rounded-full bg-[#6044da] flex items-center justify-center">
            <Heart color="#6044da" size={20} className="fill-purple-50" />
          </div>
          Thank you for helping us grow!
        </div>
      </div>

      <div className="flex gap-5 w-full px-20 py-10">
        <div className="w-2/3 rounded-xl border border-gray-200 p-10 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold">Share Your Feedback</h3>
            <p className="text-gray-700">Let us know what you think, suggest improvements, <br />or report ay issue.</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="flex gap-2 text-lg font-bold">What is your feedback about? <span className="text-red-600">*</span></h4>

            <div className="flex gap-5">
              <button className="w-1/4 flex flex-col gap-5 p-5 items-center rounded-xl border border-gray-200">
                <div className="h-15 w-15 bg-gray-200 rounded-full flex items-center justify-center">
                  <MessageSquare color="#9ca3af" stroke-width={2.75} size={30} />
                </div>
                <p className="font-bold">General Feedback</p>
              </button>

              <button className="w-1/4 flex flex-col gap-5 p-5 items-center rounded-xl border border-gray-200">
                <div className="h-15 w-15 bg-gray-200 rounded-full flex items-center justify-center">
                  <Lightbulb color="#9ca3af" stroke-width={2.75} size={30} />
                </div>
                <p className="font-bold">Feature Request</p>
              </button>

              <button className="w-1/4 flex flex-col gap-5 p-5 items-center rounded-xl border border-gray-200">
                <div className="h-15 w-15 bg-gray-200 rounded-full flex items-center justify-center">
                  <TriangleAlert color="#9ca3af" stroke-width={2.75} size={30} />
                </div>
                <p className="font-bold">Report an Issue</p>
              </button>

              <button className="w-1/4 flex flex-col gap-5 p-5 items-center rounded-xl border border-gray-200">
                <div className="h-15 w-15 bg-gray-200 rounded-full flex items-center justify-center">
                  <Ellipsis color="#9ca3af" stroke-width={2.75} size={30} />
                </div>
                <p className="font-bold">Other</p>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="flex gap-2 text-lg font-bold">Tell us more <span className="text-red-600">*</span></h4>
            <textarea className="border border-gray-300 rounded-xl p-5 text-gray-600" rows={5} placeholder="Share your thoughts..."></textarea>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="flex gap-2 text-lg font-bold">How would you rate your overall experience?</h4>
            <div className="flex gap-5 items-center">
              <Star color="#9ca3af" size={50} />
              <Star color="#9ca3af" size={50} />
              <Star color="#9ca3af" size={50} />
              <Star color="#9ca3af" size={50} />
              <Star color="#9ca3af" size={50} />
              <p className="text-gray-700">Select a rating</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="flex gap-2 text-lg font-bold">Email (optional)</h4>
            <input type="email" placeholder="Enter your email (optional)" className="rounded-xl px-4 py-2 w-full border border-gray-300" />
            <p className="text-gray-600 text-sm">We may contact you for updates or clarifications.</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="flex gap-2 text-lg font-bold">Add screenshots or attachments (optional)</h4>
            <label htmlFor="file-upload" className="w-full border-2 border-dashed border-purple-200 rounded-xl flex flex-col items-center justify-center gap-2 p-5 cursor-pointer hover:border-[#6044da] hover:bg-purple-50 transition-all">
              <div className="h-20 w-20 rounded-full bg-purple-100 flex items-center justify-center">
                <Upload color="#6044da" size={24} />
              </div>
              <p className="text-gray-600 text-sm">Drag and drop files here or <span className="text=[#6044da] font-semibold">click to upload</span></p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF, PDF up to 10MB</p>
            </label>
            <input id="file-upload" type="file" multiple accept=".png, .jpg, .jpeg, .gif, .pdf" className="hidden" />
            <p className="text-gray-600 text-sm">We may contact you for updates or clarifications.</p>
          </div>

          <div className="flex justify-between">
            <button className="bg-[#6044da] px-5 py-2 rounded-lg text-white flex gap-3 items-center">
              Submit Feedback
              <ExternalLink size={20} />
            </button>
            <div className="flex items-center gap-3">
              <ShieldCheck color="#6044da" size={16} />
              <p className="text-sm text-gray-600">Your feedback is secure and confidential.</p>
            </div>
          </div>
        </div>

        <div className="w-1/3 flex flex-col justify-between">
          <div className="flex flex-col gap-7 p-10 rounded-xl border border-gray-200">
            <h1 className="text-xl font-bold">Why Your Feedback Matters</h1>

            <div className="flex flex-col gap-5">
              <div className="flex gap-5 items-center">
                <div className="h-15 w-15 rounded-full bg-purple-100 flex items-center justify-center">
                  <Sparkles color="#6044da" fill="#6044da" size={30} />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-lg">Helps Us Improve</h4>
                  <p className="text-gray-700">Your suggestions help us enhance features and fix issues faster.</p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="h-15 w-15 rounded-full bg-purple-100 flex items-center justify-center">
                  <UsersRound color="#6044da" fill="#6044da" size={30} />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-bold">Built for You</h4>
                  <p className="text-gray-700">We build Learnify AI based on what learners like you need.</p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="h-15 w-15 rounded-full bg-purple-100 flex items-center justify-center">
                  <MessageSquare color="#6044da" fill="#6044da" size={30} />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-bold">We Listen</h4>
                  <p className="text-gray-700">Every feedback is read carefully by our team.</p>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <div className="h-15 w-15 rounded-full bg-purple-100 flex items-center justify-center">
                  <Shield color="#6044da" fill="#6044da" size={30} />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold">Safe & COnfidential</h4>
                  <p className="text-sm text-gray-700">Your feedback is always kept private and secure.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7 p-10 rounded-xl border border-gray-200">
            <h1 className="text-xl font-bold">What Happens Next?</h1>

            <div className="flex flex-col gap-3">
              <div className="flex gap-5 items-center">
                <div className="h-12 w-12 rounded-full bg-[#6044da] text-white text-xl font-semibold flex items-center justify-center">
                  1
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-lg">We receive your feedback</h4>
                  <p className="text-gray-700">Our team reviews your submission.</p>
                </div>
              </div>

              <div className="w-12 flex items-center justify-center">
                <ArrowDown color="#6044da" />
              </div>

              <div className="flex gap-5 items-center">
                <div className="h-12 w-12 rounded-full bg-purple-100 text-[#6044da] text-xl font-bold flex items-center justify-center">
                  2
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-lg">We analyze and prioritize</h4>
                  <p className="text-gray-700">We evaluate and plan improvements.</p>
                </div>
              </div>

              <div className="w-12 flex items-center justify-center">
                <ArrowDown color="#6044da" />
              </div>

              <div className="flex gap-5 items-center">
                <div className="h-12 w-12 rounded-full bg-purple-100 text-[#6044da] text-xl font-bold flex items-center justify-center">
                  3
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-lg">We take action</h4>
                  <p className="text-gray-700">Changes are made to improve your experience.</p>
                </div>
              </div>

              <div className="w-12 flex items-center justify-center">
                <ArrowDown color="#6044da" />
              </div>

              <div className="flex gap-5 items-center">
                <div className="h-12 w-12 rounded-full bg-purple-100 text-[#6044da] text-xl font-bold flex items-center justify-center">
                  4
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-bold text-lg">We keep improving</h4>
                  <p className="text-gray-700">Your feedback drives continuous growth.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-purple-100 rounded-xl justify-center flex gap-20">
            <div className="flex flex-col gap-1">
              <h5 className="font-bold text-lg">Have something else to share?</h5>
              <p className="text-gray-600">You can reach us directly at</p>
              <p className="text-[#6044da] font-semibold">support@learnifyai.com</p>
            </div>

            <div className="flex items-center justify-center">
              <MailOpen color="#6044da" size={90} />
            </div>
          </div>
        </div>
      </div>

      <div className="px-20 pb-10">
        <div className="bg-purple-100 rounded-xl px-15 py-10 flex justify-between">
          <div className="flex gap-10 items-center">
            <MessageSquareHeart color="#6044da" size={60} />

            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold">Every suggestion makes Learnify AI better.</h4>
              <p>Thank you for being a part of our learning community!</p>
            </div>
          </div>

          <button className="border border-[#6044da] text-[#6044da] font-bold rounded-lg px-8 py-2 flex gap-3 items-center">
            View Roadmap
            <ArrowRight/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Feedback