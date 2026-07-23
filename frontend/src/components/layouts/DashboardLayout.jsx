import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
    Award,
    BookOpen,
    LayoutDashboard,
    LogOut,
    Menu,
    Map,
    UserRound,
    X,
} from "lucide-react";
import Logo from "../common/Logo";
import { useAuth } from "../../context/AuthContext";
import { sidebarLinks } from "../../data/dashboard/dashboardData";
import { ROUTES } from "../../data/routes";

const iconMap = {
    Overview: LayoutDashboard,
    "My Learning": BookOpen,
    Roadmap: Map,
    Achievements: Award,
    Profile: UserRound,
};

const DashboardLayout = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = async () => {
        await logout();
        navigate(ROUTES.HOME);
    };

    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="min-h-screen bg-[#f8f7fc]">
            <div className="flex min-h-screen">
                <aside
                    className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-gray-200 bg-white transition-transform duration-300 lg:static lg:translate-x-0 ${
                        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5">
                        <Logo size="small" />
                        <button
                            type="button"
                            onClick={closeSidebar}
                            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
                            aria-label="Close sidebar"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <nav className="flex flex-1 flex-col gap-1 px-3 py-5" aria-label="Dashboard navigation">
                        {sidebarLinks.map((link) => {
                            const Icon = iconMap[link.name] || LayoutDashboard;

                            return (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    end={link.end}
                                    onClick={closeSidebar}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                                            isActive
                                                ? "bg-[#6044da] text-white shadow-sm"
                                                : "text-gray-600 hover:bg-purple-50 hover:text-[#6044da]"
                                        }`
                                    }
                                >
                                    <Icon size={18} />
                                    {link.name}
                                </NavLink>
                            );
                        })}
                    </nav>

                    <div className="border-t border-gray-100 p-4">
                        <div className="mb-3 rounded-2xl bg-[#f5f2ff] p-4">
                            <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                            <p className="mt-1 truncate text-xs text-gray-500">{user?.email}</p>
                            <span className="mt-3 inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#6044da]">
                                {user?.plan} Plan
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={handleLogout}
                            className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                        >
                            <LogOut size={16} />
                            Log Out
                        </button>
                    </div>
                </aside>

                {isSidebarOpen && (
                    <button
                        type="button"
                        className="fixed inset-0 z-30 bg-black/40 lg:hidden"
                        aria-label="Close sidebar overlay"
                        onClick={closeSidebar}
                    />
                )}

                <div className="flex min-w-0 flex-1 flex-col">
                    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur-md">
                        <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsSidebarOpen(true)}
                                    className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
                                    aria-label="Open sidebar"
                                >
                                    <Menu size={22} />
                                </button>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6044da]">
                                        Learner Space
                                    </p>
                                    <h1 className="text-lg font-bold text-gray-900 sm:text-xl">
                                        Welcome back, {user?.name?.split(" ")[0] || "Learner"}
                                    </h1>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6044da] text-sm font-bold text-white shadow-sm">
                                    {user?.avatarInitials || "U"}
                                </div>
                            </div>
                        </div>
                    </header>

                    <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
