import { useContext } from "react"
import { userInfoContext } from "../App"



const Welcome = () =>{
const {user} = useContext(userInfoContext)

    return (<h1>Welcome {user.name}!</h1>)
}

export default Welcome