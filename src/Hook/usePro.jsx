import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const usePro = () => {
    const {user, loading} = useContext(AuthContext)
    console.log(user)
    const axiosSecure = useAxiosSecure()

    const {data: isPro, isPending: isProLoading} = useQuery({
        queryKey: [user?.email, 'isPro'],
        // enabled: !loading,
       enabled:  !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
           
            console.log(res.data)

            return res.data?.prouser
        }
    }) 

    return [isPro, isProLoading]
};

export default usePro;
