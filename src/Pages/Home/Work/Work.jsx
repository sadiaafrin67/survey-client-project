import React from "react";
import { FaSearchDollar } from "react-icons/fa";


const Work = () => {
  return (
    <div>
      <h2 className="text-center md:text-4xl text-xl font-bold mt-5 mb-10">
        How Does Survey<span className="text-[#2a5298] font-bold">Nest</span>{" "}
        Works!!!
      </h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-2">
     <div>
  <p className="text-blue-800 md:text-2xl text-xl font-semibold mb-3">
        Market search surveys:

        </p>

        <p className="text-lg font-medium mb-1">
          Collect qualitative and quantitative data.{" "}
        </p>

        <p className="text-lg font-medium mb-1">
          Effortless participant outreach.
        </p>
        <p className="text-lg font-medium mb-1">
          Use in the field or in the lab.
        </p>
      </div>

      <div>
        <p className="text-blue-800 md:text-2xl text-xl font-semibold mb-3">
        Human resource surveysHuman resource surveys:
        </p>

        <p className="text-lg font-medium mb-1">
        Screen potential candidates.{" "}
        </p>

        <p className="text-lg font-medium mb-1">
        Evaluate current employees.
        </p>
        <p className="text-lg font-medium mb-1">
        Gather team feedback.
        </p>
      </div>

      <div>
        <p className="text-blue-800 md:text-2xl text-xl font-semibold mb-3">
        Customer satisfaction surveys:
        </p>

        <p className="text-lg font-medium mb-1">
        Learn what your customers want.
        </p>

        <p className="text-lg font-medium mb-1">
        Reach customers through social media.
        </p>
        <p className="text-lg font-medium mb-1">
        Find out what's working and what isn't.
        </p>
      </div>

      <div>
        <p className="text-blue-800 md:text-2xl text-xl font-semibold mb-3">
        Education surveys:
        </p>

        <p className="text-lg font-medium mb-1">
        Make learning fun.{" "}
        </p>

        <p className="text-lg font-medium mb-1">
        Track student progress.
        </p>
        <p className="text-lg font-medium mb-1">
        Communicate between students and teachers.
        </p>
      </div>

      <div>
        <p className="text-blue-800 md:text-2xl text-xl font-semibold mb-3">
        Event surveys:
        </p>

        <p className="text-lg font-medium mb-1">
        Manage RSVPs.{" "}
        </p>

        <p className="text-lg font-medium mb-1">
        Assess guest and client needs.
        </p>
        <p className="text-lg font-medium mb-1">
        Promote events online.
        </p>
      </div>
      
      <div>
        <p className="text-blue-800 md:text-2xl text-xl font-semibold mb-3">
        Friends and family surveys:
        </p>

        <p className="text-lg font-medium mb-1">
        Plan holidays and reunions.{" "}
        </p>

        <p className="text-lg font-medium mb-1">
        Learn more about each other.
        </p>
        <p className="text-lg font-medium mb-1">
        Keep in touch and have fun.
        </p>
      </div>
     </div>
    </div>
  );
};

export default Work;
