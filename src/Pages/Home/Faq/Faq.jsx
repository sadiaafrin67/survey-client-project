import Lottie from "lottie-react";
import animation from '../../../assets/Animation - 1701174667535.json'

const Faq = () => {
  return (
    <div>
      <h2 className="text-center md:text-3xl text-xl font-bold mt-5 mb-10">
        Some Common Question About{" "}
        <span className="text-[#2a5298]">SurveyNest</span>
      </h2>
      <div className="">
      <div className=" my-10 md:my-20  ">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="lg:w-1/2 w-full ">
            {/* <img src="https://i.ibb.co/0ZrYsWT/cartography-connection-earth-world-map-concept.jpg" /> */}

            <Lottie
              className=" h-full"
              animationData={animation}
              loop={true}
              mode="normal"
              speed={1}
            ></Lottie>
          </div>

          <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100 ">
          <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
    How do I participate in surveys on this website?
    </div>
    <div className="collapse-content"> 
      <p>To participate in surveys on our website, simply log in to your account and navigate to the "Surveys" section. There, you will find a list of available surveys tailored to your profile. Click on a survey that interests you, follow the instructions provided, and share your opinions to start earning rewards.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    How are survey rewards distributed, and what can I redeem them for?
    </div>
    <div className="collapse-content"> 
      <p> Survey rewards are typically distributed in the form of points or credits, which can be redeemed for various rewards. Once you accumulate a certain number of points, you can exchange them for gift cards, cash, or other exciting prizes. The redemption options may vary, so be sure to check the "Rewards" or "Redeem" section on our website for the latest offerings.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Is my personal information safe when participating in surveys on this platform?
    </div>
    <div className="collapse-content"> 
      <p>Yes, we take the security and privacy of your information seriously. Your personal details are strictly confidential and will only be used for matching you with relevant surveys. We adhere to strict data protection policies and do not share your information with third parties without your explicit consent. Before participating in any survey, we recommend reviewing our privacy policy to understand how your data is handled and protected.</p>
    </div>
  </div>
</div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Faq;
