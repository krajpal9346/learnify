import { ArrowRight, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section className="px-4 py-10 sm:px-8 lg:px-12 xl:px-20">
            <div className="overflow-hidden rounded-3xl bg-linear-to-r from-[#6044da] via-[#7154f2] to-[#8b5cf6] px-8 py-14 text-white shadow-2xl lg:px-14">
                <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                    <div className="max-w-3xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
                            <PlusCircle
                                size={18}
                                aria-hidden="true"
                            />

                            <span className="text-sm font-semibold">
                                Join the Conversation
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                            Have a question or
                            <br />
                            something valuable to share?
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-purple-100 sm:text-lg">
                            Start a discussion, ask for help, showcase your
                            projects, contribute your knowledge, and connect
                            with thousands of learners inside the Learnify AI
                            Community.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link
                            to="/community/new"
                            className="flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-[#6044da] transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            Start Discussion

                            <ArrowRight
                                size={18}
                                aria-hidden="true"
                            />
                        </Link>

                        <Link
                            to="/contact"
                            className="flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                        >
                            Contact Moderators
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;