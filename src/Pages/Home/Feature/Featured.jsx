import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useEffect, useState } from "react";
import FeaturedCard from './FeaturedCard';

const Featured = () => {
  const axiosSecure = useAxiosSecure();
  const [featuredData, setFeaturedData] = useState(null);

  const { data: featured = [] } = useQuery({
    queryKey: ["featured"],
    queryFn: async () => {
      const res = await axiosSecure.get("/surveys");
    //   console.log(res)
      return res?.data
    },
  });

    // console.log(featured);

  useEffect(() => {
    console.log("useEffect called");
    if (featuredData === null && featured && featured?.length > 0) {
      const topSixVotedSurveys = getTopSixVotedSurveys(featured);
      console.log(topSixVotedSurveys);
      setFeaturedData(topSixVotedSurveys);
    }
  }, [featured, featuredData]);

  console.log(featured);

  function getTopSixVotedSurveys(data) {
    const sortedSurveys = data?.sort((a, b) => b.voted - a.voted);

    const topSixSurveys = sortedSurveys.slice(0, 6);

    return topSixSurveys;
  }

  //   const topSixVotedSurveys = getTopSixVotedSurveys(featured);
  //   console.log(topSixVotedSurveys);

  return (
    <div>
      <div className="text-center mb-16 mt-8">
        <h2 className="md:text-3xl  font-bold text-xl">
          Featured <span className="text-[#2a5298]">Survey</span>
        </h2>
        <p className="lg:text-base md:text-sm text-xs font-medium mt-3 text-gray-600">
          Highlight top surveys for attention, offering relevance and rewards in{" "}
          <br /> our featured survey section for keep you informed
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
               featuredData && featuredData?.length > 0 && featuredData?.map((item, index) => 
                
                    <FeaturedCard key={index} item={item}></FeaturedCard>
                
               )
            }
        </div>
      </div>
    </div>
  );
};

export default Featured;
