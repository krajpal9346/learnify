import Logo from "../common/Logo";

const LoginShowcase = ({ title, description, illustration, illustrationAlt = "Illustration", children, }) => {
    return (
        <section className="relative hidden lg:flex lg:w-1/2 flex-col overflow-hidden bg-linear-to-br from-[#6044da] via-[#6b4ef5] to-[#7d63ff] p-8 lg:p-12 xl:p-16">
            <Logo size="large" variant="light" />

            <div className="mt-10 flex flex-1 flex-col">
                <div className="max-w-xl">
                    <h1 className="text-4xl font-bold leading-tight text-white lg:text-5xl 2xl:text-6xl">{title}</h1>
                    <p className="mt-6 max-w-lg text-base leading-8 text-purple-100 lg:text-lg">{description}</p>
                </div>

                {illustration && (
                    <div className="mt-10 flex flex-1 items-center justify-center">
                        <img src={illustration} alt={illustrationAlt} className="max-h-72 w-auto object-contain lg:max-h-96 xl:max-h-120 2xl:max-h-140 scale-150" />
                    </div>
                )}

                {children && (
                    <div className="pt-8">
                        {children}
                    </div>
                )}
            </div>
        </section>
    );
};

export default LoginShowcase;