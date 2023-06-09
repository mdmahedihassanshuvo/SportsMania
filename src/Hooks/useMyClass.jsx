import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useMyClass = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: myClasses = [], refetch } = useQuery({
        queryKey: ['myClasses', user?.displayName],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/addedClasses')
            return res.data;
        }
    })
    return [myClasses, refetch]
};

export default useMyClass;