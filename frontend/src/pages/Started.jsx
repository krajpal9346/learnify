import AuthLayout from "../components/layouts/AuthLayout";
import SignupShowcase from "../components/auth/SignupShowcase";
import SignupForm from "../components/auth/SignupForm";
import SignupFeatures from "../components/auth/SignupFeatures";
import LearnerStats from "../components/auth/LearnerStats";
import girl from "../assets/girl.png";

const Started = () => {
    return (
        <AuthLayout>
            <div className="flex min-h-screen overflow-hidden rounded-3xl bg-white shadow-2xl xl:min-h-190">
                <SignupShowcase variant="signup" title={
                    <>
                        Start your{" "}<span className="text-gray-800">learning journey</span> <br />with Learnify AI
                    </>
                }
                    description="Create your account and get personalized course recommendations designed specifically for your goals."
                    illustration={girl}>
                    <SignupFeatures />
                    <LearnerStats />
                </SignupShowcase>

                <SignupForm />
            </div>
        </AuthLayout>
    );
};

export default Started;