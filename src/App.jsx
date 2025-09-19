import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";

const App = () => {
    return (
        <div className="bg-customNavy min-h-screen text-white">
            <TopBar />
            <Navbar />
            <Hero />
        </div>
    );
};

export default App;
