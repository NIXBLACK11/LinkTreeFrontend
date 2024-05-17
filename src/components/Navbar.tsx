export const Navbar = () => {
    return (
        <div className="min-w-full">
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img className="h-7 sm:h-8" style={{width: 70, height: 60}} src="../icon.png" alt=""/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Go Link Tree</span>
                    </a>
                </div>
            </nav>
        </div>
    )
};