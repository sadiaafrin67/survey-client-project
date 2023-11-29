import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const useSurveyor = () => {
    const {user, loading} = useContext(AuthContext)
    console.log(user)
    const axiosSecure = useAxiosSecure()

    const {data: isSurveyor, isPending: isSurveyorLoading} = useQuery({
        queryKey: [user?.email, 'isSurveyor'],
        enabled:  !!user?.email,
    //    enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)

           
            console.log(res.data)

            return res.data?.surveyor
        }
    }) 

    return [isSurveyor, isSurveyorLoading]
};

export default useSurveyor;
