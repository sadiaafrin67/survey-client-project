import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="mt-">
      <h2 className="text-center md:text-3xl text-xl font-bold mt-5 mb-5">
        Don't just take our word for it…
      </h2>
      <p className="lg:text-base md:text-sm text-xs font-medium mt-3 text-gray-600 text-center">
        Thousands of people put their trust in{" "}
        <span className="text-[#2a5298] font-semibold">SurveyNest</span> every
        day. <br /> Here's what some of them had to say.
      </p>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mt-4 mb-20"
      >
       

        <SwiperSlide> 
          <figure className="max-w-screen-md mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-[#2a5298] dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="md:text-2xl italic text-sm font-medium text-gray-900 dark:text-white">
                "I just wanted to let you know that SurveyNest is a great business tool, helping my organization obtain some really important feedback from key stakeholders. Data we will now be using to refine our customer and volunteer experiences throughout the year. The online survey tools are incredibly user-friendly, and the survey proposition is far more useful than we ever thought it was going to be. SurveyNest has enabled us to obtain important information easily and in a format that is powerful and unambiguous. So thank you!"
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <img
                className="w-8 h-8 rounded-full"
                src="https://i.ibb.co/FYTT19c/smiling-young-man-with-crossed-arms-outdoors.jpg"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                <cite className="pe-3 font-medium text-[#2a5298] dark:text-white">
                Tony Yorke
                </cite>
                
              </div>
            </figcaption>
          </figure>
          </SwiperSlide>

          <SwiperSlide>
          <figure className="max-w-screen-md mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-[#2a5298] dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="md:text-2xl text-sm italic font-medium text-gray-900 dark:text-white">
                "I want to thank you so much for this facility. It is helping me so much with my Masters Degree research. It is easy to set up, to use and to retrieve results. Highly recommended!"
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                <cite className="pe-3 font-medium text-[#2a5298] dark:text-white">
                  Michael Gough
                </cite>
                
              </div>
            </figcaption>
          </figure>
        </SwiperSlide>

        <SwiperSlide> 
          <figure className="max-w-screen-md mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-[#2a5298] dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="md:text-2xl text-sm italic font-medium text-gray-900 dark:text-white">
                "SurveyNest is the perfect tool to generate feedback after group events. Clark Webinar Consulting makes SurveyNest an important part of every webinar we produce. Great functionality and beautiful design!"
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <img
                className="w-8 h-8 rounded-full"
                src="https://i.ibb.co/zGwPwtw/smiling-man-sitting-street-cafe-table-with-his-arms-crossed.jpg"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                <cite className="pe-3 font-medium text-[#2a5298] dark:text-white">
                Dave Clark
                </cite>
                
              </div>
            </figcaption>
          </figure></SwiperSlide>
        <SwiperSlide> 
          <figure className="max-w-screen-md mx-auto text-center">
            <svg
              className="w-10 h-10 mx-auto mb-3 text-[#2a5298] dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
              <p className="md:text-2xl text-sm italic font-medium text-gray-900 dark:text-white">
                "SurveyPlanet is the best website to create surveys! It is very convenient, and it is possible to do many things even if you just decide to keep the free version. The biggest advantage to SurveyPlanet compared to other platforms is the unlimited number of answers you can get. Thank you!"
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <img
                className="w-8 h-8 rounded-full"
                src="https://i.ibb.co/ZNqfZb3/portrait-smiling-blonde-woman.jpg"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                <cite className="pe-3 font-medium text-[#2a5298] dark:text-white">
                Adrien Cabon
                </cite>
                
              </div>
            </figcaption>
          </figure></SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Testimonial;
