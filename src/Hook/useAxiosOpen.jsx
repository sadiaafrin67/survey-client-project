import axios from "axios";


const axiosOpen = axios.create({
    baseURL: 'https://survey-nest-server.vercel.app'
})

const useAxiosOpen = () => {
    return axiosOpen
};

export default useAxiosOpen;