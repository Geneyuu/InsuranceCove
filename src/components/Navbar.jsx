import logo from "../assets/LOGO 2.png";

const navLinks = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 2, name: "FAQ", href: "#about" },
    { id: 3, name: "Contact", href: "#contact" },
];

const Navbar = () => {
    return (
        <div className="bg-custonDarkNavy">
            <div className="max-w-5xl mx-auto flex items-center justify-between py-2 px-4 md:px-4 lg:px-0">
                {/* Logo */}
                <div className="flex">
                    <img src={logo} alt="Logo" className="h-[65px]" />
                </div>

                {/* Right side (links) */}
                <div className="flex items-center gap-4 text-[#dde6f8]">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className="hover:text-[#015FC9] transition tracking-wide capitalize text-md"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
