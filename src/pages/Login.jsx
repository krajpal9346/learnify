import AuthLayout from "../components/layouts/AuthLayout";
import LoginShowcase from "../components/auth/LoginShowcase";
import LoginForm from "../components/auth/LoginForm";
import laptop from "../assets/laptop.png";

const Login = () => {
    return (
        <AuthLayout>
            <div className="flex min-h-screen overflow-hidden rounded-3xl bg-white shadow-2xl xl:min-h-190">
                <LoginShowcase title={
                    <>
                        Learn smarter,<br />grow faster.
                    </>
                }
                    description="Personalized AI learning paths designed to help you achieve your goals faster."
                    illustration={laptop}
                    illustrationAlt="Learnify AI" />

                <LoginForm />
            </div>
        </AuthLayout>
    );
};

export default Login;