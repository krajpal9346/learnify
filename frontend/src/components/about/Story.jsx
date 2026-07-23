import SectionHeader from "../common/SectionHeader";
import StoryTimeline from "./StoryTimeline";

const Story = () => {
    return (
        <section className="px-4 py-12 sm:px-8 lg:px-12 xl:px-20">
            <div className="rounded-3xl bg-purple-100 px-6 py-10 sm:px-10 lg:px-12 xl:px-16">
                <div className="flex flex-col gap-12 xl:flex-row xl:items-center xl:gap-16">
                    <div className="w-full xl:w-2/5">
                        <SectionHeader badge="Our Story" title="The Journey of Learnify AI" description="" align="left" />

                        <div className="mt-6 flex flex-col gap-5">
                            <p className="leading-7 text-gray-700">Learnify AI was born from a simple belief— learning should be personal, practical, and accessible to everyone.</p>
                            <p className="leading-7 text-gray-700">We saw learners struggling to discover the right courses and skills that truly matched their goals. With the rapid advancement of AI, we envisioned a platform that could act as a personal learning companion.</p>
                            <p className="leading-7 text-gray-700">Today, Learnify AI empowers thousands of learners to discover the best learning paths, develop in-demand skills, and confidently accelerate their careers.</p>
                        </div>
                    </div>

                    <StoryTimeline />
                </div>
            </div>
        </section>
    );
};

export default Story;