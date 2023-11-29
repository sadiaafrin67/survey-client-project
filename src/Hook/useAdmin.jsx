import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user, loading} = useContext(AuthContext)
    console.log(user)
    const axiosSecure = useAxiosSecure()

    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        // enabled: !loading,
       enabled:  !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
           
            console.log(res.data)

            return res.data?.admin
        }
    }) 

    return [isAdmin, isAdminLoading]
};

export default useAdmin;
