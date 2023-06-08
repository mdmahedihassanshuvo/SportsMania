import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const usePopularClasses = () => {
    const {data: popularClasses=[], refetch} = useQuery({
        queryKey: ['popularcls'],
        queryFn: async ()=>{
            const res = await axios.get('http://localhost:5000/popularclasses')
            console.log(res.data)
            return res.data
        }
    })
    return [popularClasses, refetch]
}

export default usePopularClasses;