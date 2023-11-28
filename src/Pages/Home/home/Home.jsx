import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Featured from "../Feature/Featured";
import Latest from "../Latest/Latest";
import Testimonial from "../Testimonial/Testimonial";
import Work from "../Work/Work";


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Featured></Featured>
            <Latest></Latest>
            <Work></Work>
            <Testimonial></Testimonial>
            <Faq></Faq>
        </div>
    );
};

export default Home;