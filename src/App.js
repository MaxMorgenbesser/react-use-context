import { useState,createContext } from 'react';
import './App.css';
import Hero from './components/Hero';
import Menubar from './components/Menubar';


export const userInfoContext = createContext(null)



function App() {
const [user,setUser] = useState(null)
const [isLoggedIn,setIsLoggedIn]=useState(false)


  return (
   <userInfoContext.Provider value={{user,setUser,isLoggedIn,setIsLoggedIn}}>
   <Menubar/>
   <Hero/>
   </userInfoContext.Provider>
  );
}

export default App;
