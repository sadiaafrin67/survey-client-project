import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const MySurvey = () => {

    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {data: mysurvey} = useQuery({

        queryKey: ["my-survey"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/survey/mysurvey/${user.email}`) 
            return res.data
           
        }
    })
    return (
        <div>
            
        </div>
    );
};

export default MySurvey;