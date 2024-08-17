import axios from "axios";

export const axiosOpen = axios.create({
  baseURL: "http://localhost:3001",
});
const useAxiosOpen = () => {
  return axiosOpen;
};

export default useAxiosOpen;
