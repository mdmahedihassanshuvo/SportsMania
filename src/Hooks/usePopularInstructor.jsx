import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePopularInstructor = () => {
    const {data: popularInstructor = [], refetch} = useQuery({
        queryKey: ['popularinstructors'],
        queryFn: async () => {
            const res = await axios.get('https://summer-server-theta.vercel.app/popularinstructors')
            // console.log(res.data)
            return res.data
        }
    })
    return [popularInstructor, refetch]
}

export default usePopularInstructor;