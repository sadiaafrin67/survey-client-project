import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosOpen from "../../Hook/useAxiosOpen";
import SurveyCard from "./SurveyCard";
import { useEffect, useState } from "react";

const Surveys = () => {
  const axiosPublic = useAxiosOpen();
  const [searchInput, setSearchInput] = useState("");
  const [filterS, setFilterS] = useState(null)

  const {
    data: surveys = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["surveys"],

    queryFn: async () => {
      const res = await axiosPublic.get("/surveys");
      return res.data;
    },
  });

  useEffect(() => {
    if(filterS === null && surveys && surveys.length > 0){
      setFilterS(surveys)
    } 
  }, [filterS, surveys])


  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  

  const handelSearchSubmit = (e) => {
    e.preventDefault();
  
    // Filter the data based on the search input (title or category)
    const filteredSurveys = surveys?.filter(survey => {
      const searchInputLower = searchInput.toLowerCase();
      const titleLower = survey.title.toLowerCase();
      const categoryLower = survey.category.toLowerCase();
  
      return titleLower.includes(searchInputLower) || categoryLower.includes(searchInputLower);
    });
    
    setFilterS(filteredSurveys)
    console.log('Filtered Surveys:', filteredSurveys);
  };

  return (
    <div className="mb-20 mt-10">
      <form onSubmit={handelSearchSubmit}>
        <div className="mb-8 ">
          <input
            className="border ml-5 w-[300px] p-2 text-center rounded-l-lg"
            placeholder="Filter by title and category"
            type="text"
            name="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            type="submit"
            className="btn rounded-l-lg bg-blue-950 text-white"
          >
            Search
          </button>
        </div>
      </form>

      <h2 className="lg:text-4xl md:text-2xl text-xl font-bold text-[#2a5298] text-center">
        Participate in Surveys
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filterS && filterS.length > 0 && filterS?.map((survey) => (
          <SurveyCard
            key={survey._id}
            survey={survey}
            refetch={refetch}
          ></SurveyCard>
        ))}
      </div>
    </div>
  );
};

export default Surveys;


// truthy value 
// falsy value = 0, null , , '', undi,  nan, flase