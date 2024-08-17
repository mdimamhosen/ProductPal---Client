export const getToken = () => {
  return localStorage.getItem("token") || sessionStorage.getItem("token");
};
export const setToken = () => {
  return localStorage.setItem("token") || sessionStorage.setItem("token");
};
