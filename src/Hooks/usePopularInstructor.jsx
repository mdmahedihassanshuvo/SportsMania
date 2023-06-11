import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePopularInstructor = () => {
    const {data: popularInstructor = [], refetch} = useQuery({
        queryKey: ['popularinstructors'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/popularinstructors')
            // console.log(res.data)
            return res.data
        }
    })
    return [popularInstructor, refetch]
}

export default usePopularInstructor;