const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-10">
            <div className="w-full max-w-7xl">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;