// Function to get the JWT token from localStorage or sessionStorage
export const getToken = () => {
  return localStorage.getItem("token") || sessionStorage.getItem("token");
};

export const setToken = () => {
  return localStorage.setItem("token") || sessionStorage.setItem("token");
};
