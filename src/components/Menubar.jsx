import { useContext } from "react"
import { userInfoContext } from "../App"
import Login from "./Login"
import Logout from "./Logout"


const Menubar = () =>{
const {isLoggedIn} = useContext(userInfoContext)
    return ( isLoggedIn ? <Logout /> : <Login/>)
}

export default Menubar