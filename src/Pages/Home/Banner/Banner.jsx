import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen my-10"
      style={{
        backgroundImage: "url(https://img.freepik.com/free-vector/team-checklist-concept-illustration_114360-13202.jpg?w=740&t=st=1701577286~exp=1701577886~hmac=35c69c5cb81ebebe945ee8a1330d0c4e1e756323b128773c348ef490d1fdb798)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl lg:text-5xl md:text-3xl font-bold text-white">
            There's always an answer.
          </h1>
          <p className="mb-5 text-xs lg:text-lg font-medium text-gray-200">
            The most complete platform to solve all your insight needs. From
            basic surveys to complex research, customer experience and employee
            engagement.
          </p>
          <div className="flex justify-center items-center">
          <Link to="/surveys">
          <button className="btn text-blue-900 rounded-lg bg-white border-none">Explore More</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
