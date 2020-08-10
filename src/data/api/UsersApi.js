import axios from "axios";
import Endpoints from "../constants /Endpoints";

class UsersGET {
    getUsers = () => axios.get(Endpoints.GET_USERS, {baseURL:`http://localhost:3001`})
}
export default UsersGET