import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosOpen from "../../Hook/useAxiosOpen";
import SurveyCard from "./SurveyCard";
import { useEffect, useState } from "react";

const Surveys = () => {
  const axiosPublic = useAxiosOpen();
  const [searchInput, setSearchInput] = useState("");
  const [filterS, setFilterS] = useState(null);

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
    if (filterS === null && surveys && surveys.length > 0) {
      setFilterS(surveys);
    }
  }, [filterS, surveys]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handelSearchSubmit = (e) => {
    e.preventDefault();

    // Filter the data based on the search input (title or category)
    const filteredSurveys = surveys?.filter((survey) => {
      const searchInputLower = searchInput.toLowerCase();
      const titleLower = survey.title.toLowerCase();
      const categoryLower = survey.category.toLowerCase();

      return (
        titleLower.includes(searchInputLower) ||
        categoryLower.includes(searchInputLower)
      );
    });

    setFilterS(filteredSurveys);
    console.log("Filtered Surveys:", filteredSurveys);
  };

  return (
    <div className="mb-20 mt-10">
      <h2 className="lg:text-4xl md:text-2xl text-xl font-bold text-[#2a5298] text-center mb-16">
        Participate in Surveys
      </h2>

      {/* <form className="w-full flex flex-1 justify-center items-center" onSubmit={handelSearchSubmit}>
        <div className="my-8 ">
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
      </form> */}

    
        
<form  onSubmit={handelSearchSubmit}>   
   <div >
  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
      </svg>
    </div>
    <input 

    id="default-search" 
    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 


    placeholder="Filter by title and category"
    type="text"
    name="search"
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
  />
    <button type="submit" 
    className="text-white absolute end-2.5 bottom-2.5 bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  
    >
      Search
      </button>
  </div>
</div>

</form>

      
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {filterS &&
          filterS.length > 0 &&
          filterS?.map((survey) => (
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
