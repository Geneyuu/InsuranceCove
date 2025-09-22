import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import BackToTop from "./components/BackToTop";

const App = () => {
    return (
        <div className="bg-customNavy min-h-screen text-white">
            <TopBar />
            <Navbar />
            <section id="home">
                <Hero />
            </section>

            <section
                id="about"
                className="h-screen flex items-center justify-center"
            >
                <h1>About Section</h1>
            </section>

            <section
                id="services"
                className="h-screen flex items-center justify-center bg-red-200"
            >
                <h1>Services Section</h1>
            </section>

            <section
                id="contact"
                className="h-screen flex items-center justify-center"
            >
                <h1>Contact Section</h1>
            </section>

            {/* Back to top button */}
            <BackToTop />
        </div>
    );
};

export default App;