import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoClose } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa";
import logoLandScape from "../assets/logolandscape.png";

const Sidebar = ({ menuInfo, setMenuInfo }) => {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const form = formRef.current;
    const name = form.name.value;
    const userEmail = form.user_email.value;

    // Data object for emailjs
    const templateParams = {
      name,
      user_email: userEmail,
      message: "New subscriber from website!",
    };

    try {
      // --- 1. Send to Admin
      await emailjs.send(
        "service_03il6aj",
        "template_4lvz27k",
        templateParams,
        "-e_2_nUHKZrkuM6ME"
      );
      console.log("Admin notified");

      // --- 2. Send confirmation to User
      await emailjs.send(
        "service_03il6aj",
        "template_r6zpg16",
        { name, user_email: userEmail },
        "-e_2_nUHKZrkuM6ME"
      );
      console.log("User confirmation sent");

      setStatusMessage("You are now subscribed! You will receive future updates and promotions.");
      setStatusType("success");
      form.reset();
    } catch (err) {
      console.error("Email sending failed:", err.text);
      setStatusMessage("Something went wrong, try again!");
      setStatusType("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      {menuInfo && <div className="fixed inset-0 bg-gray-950/50 z-40" onClick={() => setMenuInfo(false)} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[350px] md:w-[480px] bg-custonDarkNavy shadow-lg z-50 transform transition-transform duration-300 ${
          menuInfo ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Logo & Close */}
        <div className="flex items-center justify-between bg-custonDarkNavy px-10 py-12">
          <img src={logoLandScape} alt="Logo" className="h-12 md:h-[60px]" />
          <IoClose
            className="text-2xl md:text-3xl cursor-pointer text-white"
            onClick={() => setMenuInfo(false)}
          />
        </div>

        {/* Content */}
        <div className="p-6 text-gray-300 space-y-8">
          {/* About */}
          <p className="leading-relaxed">
            Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how.
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-white">ADDRESS</h3>
              <p>California, TX 70240</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">EMAIL</h3>
              <p>support@validtheme.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">CONTACT</h3>
              <p>+44-20-7328-4499</p>
            </div>
          </div>

          {/* Subscribe Form */}
          <div className="space-y-3">
            <h3 className="text-white md:text-xl">Get Subscribed!</h3>
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
                className="px-4 py-4 outline-none bg-transparent border border-white/30 rounded"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Enter your e-mail"
                required
                className="px-4 py-4 outline-none bg-transparent border border-white/30 rounded"
              />
              <button
                type="submit"
                disabled={isSending}
                className={`px-4 py-4 flex items-center justify-center rounded text-white ${
                  isSending ? "bg-gray-500 cursor-not-allowed" : "bg-yellow-500 hover:bg-blue-500/90"
                }`}
              >
                <LuArrowUpRight className="text-xl" />
                {isSending && <span className="ml-2 text-sm">Sending...</span>}
              </button>

              {statusMessage && (
                <p className={`mt-1 text-xs ${statusType === "success" ? "text-green-400" : "text-red-400"}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>

          {/* Socials */}
          <div className="flex space-x-4 pt-2">
            <a href="#" className="p-2 rounded-full border border-gray-600 hover:bg-gray-700">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full border border-gray-600 hover:bg-gray-700">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full border border-gray-600 hover:bg-gray-700">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 rounded-full border border-gray-600 hover:bg-gray-700">
              <FaBehance />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
