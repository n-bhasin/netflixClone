import axios from "axios";

/** url to make request to movie db */
const instance = axios.create({ baseURL: "https://api.themoviedb.org/3" });

export default instance;
