import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const ProfileContent = () => {
    const { user, updateProfile } = useAuth();
    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        goal: user?.goal || "",
    });
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        setFormData({
            name: user?.name || "",
            email: user?.email || "",
            goal: user?.goal || "",
        });
    }, [user]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setSaved(false);
        setError("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSaving(true);
        setError("");

        try {
            await updateProfile({
                name: formData.name.trim(),
                email: formData.email.trim(),
                goal: formData.goal.trim(),
            });
            setSaved(true);
        } catch (err) {
            setError(err.message || "Failed to update profile");
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">Profile</h2>
                <p className="mt-2 text-sm text-gray-500 sm:text-base">
                    Manage your learner profile and career goal. Changes are saved to your Learnify account.
                </p>

                <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6044da] text-xl font-bold text-white">
                        {user?.avatarInitials || "U"}
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900">{user?.name}</p>
                        <p className="text-sm text-gray-500">{user?.plan} Plan · {user?.role}</p>
                    </div>
                </div>
            </section>

            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-semibold text-gray-900">
                            Full Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="rounded-xl border border-gray-300 px-4 py-3.5 text-sm outline-none transition focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20 sm:text-base"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-semibold text-gray-900">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="rounded-xl border border-gray-300 px-4 py-3.5 text-sm outline-none transition focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20 sm:text-base"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="goal" className="font-semibold text-gray-900">
                            Career Goal
                        </label>
                        <input
                            id="goal"
                            name="goal"
                            value={formData.goal}
                            onChange={handleChange}
                            placeholder="e.g. Full-Stack Developer"
                            className="rounded-xl border border-gray-300 px-4 py-3.5 text-sm outline-none transition focus:border-[#6044da] focus:ring-2 focus:ring-[#6044da]/20 sm:text-base"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSaving}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#6044da] px-5 py-3.5 font-semibold text-white transition hover:bg-[#5137c9] hover:shadow-lg disabled:opacity-70"
                    >
                        <Save size={18} />
                        {isSaving ? "Saving..." : "Save Changes"}
                    </button>

                    {saved && (
                        <p className="text-sm font-medium text-green-600">Profile updated successfully.</p>
                    )}
                    {error && <p className="text-sm font-medium text-red-600">{error}</p>}
                </form>
            </section>
        </div>
    );
};

export default ProfileContent;
