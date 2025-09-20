import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const navLinks = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About Us", href: "#about" },
    { id: 3, name: "Services", href: "#services" },
    { id: 4, name: "Contact", href: "#contact" },
];

const SidebarMenu = ({ sidebarMenuOpen, setSidebarMenuOpen }) => {
    return (
        <>
            {/* Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: sidebarMenuOpen ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`fixed inset-0 bg-black/50 z-40 ${
                    sidebarMenuOpen ? "block" : "hidden"
                }`}
                onClick={() => setSidebarMenuOpen(false)}
            ></motion.div>

            {/* Sidebar Menu */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: sidebarMenuOpen ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-custonDarkNavy text-white z-50 shadow-lg p-6"
            >
                {/* Close Button */}
                <div className="flex justify-end">
                    <IoClose
                        className="text-3xl cursor-pointer hover:text-yellow-400"
                        onClick={() => setSidebarMenuOpen(false)}
                    />
                </div>

                {/* Nav Links */}
                <div className="mt-10 flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className="text-lg font-medium hover:text-yellow-400 transition"
                            onClick={() => setSidebarMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Get a Quote button */}
                    <motion.a
                        href="#GetAQuote"
                        className="mt-6 bg-yellow-500 px-5 py-3 rounded-md text-customNavy font-semibold text-center hover:bg-blue-600 hover:text-white"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={() => setSidebarMenuOpen(false)}
                    >
                        Get a Quote
                    </motion.a>
                </div>
            </motion.div>
        </>
    );
};

export default SidebarMenu;
