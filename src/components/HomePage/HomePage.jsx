import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Services from "./Components/Services/Services";

 

const HomePage = () => {
    return (
        <div className="mt-16">
            <Banner/>
            <About/>
            <Services/>
        </div>
    );
};

export default HomePage;