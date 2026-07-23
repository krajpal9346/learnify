import headphones from "../../assets/headphones.png";

const CTAIllustration = () => {
    return (
        <div className="relative mt-8 flex w-full items-center justify-center xl:mt-0 xl:w-[40%]">
            <img src={headphones} alt="Customer support" className="h-40 sm:h-52 lg:h-60 xl:h-72 object-contain" />
        </div>
    );
};

export default CTAIllustration;