import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import Contact from "./Components/Contact/Contact";
import Products from "./Components/Products/Products";
import Services from "./Components/Services/Services";
import Team from "./Team/Team";

 

const HomePage = () => {
    return (
        <div className="mt-16">
            <Banner/>
            <About/>
            <Services/>
            <Contact/>
            <Products/>
            <Team/>
        </div>
    );
};

export default HomePage;