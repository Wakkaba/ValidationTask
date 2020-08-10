import axios from "axios";
import Endpoints from "../constants /Endpoints";

class UsersPOST {
    postUsers = (userInfo) => axios.post(Endpoints.ADD_USER, userInfo,{baseURL:`http://localhost:3001`} )
}
export default  UsersPOST