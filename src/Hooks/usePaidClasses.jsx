import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const usePaidClasses = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: paidClasses = [], refetch } = useQuery({
        queryKey: ['paidClasses', user.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            console.log(res.data)
            return res.data
        }
    })
    return [paidClasses, refetch]
};

export default usePaidClasses;