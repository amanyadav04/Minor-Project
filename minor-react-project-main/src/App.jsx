import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import Cards_container from "./components/Cards_container";

import Home from "./Pages/Home";
import Contact from "./Pages/oldpages/Contact";
import NewRes from "./Pages/NewRes";
import SignUp_login from "./Pages/SignUp_login";
const App = () => {
  return (
    <>
       <BrowserRouter>
          <Routes>

            <Route path="/" element={<Home/>}/>
               <Route path="restaurant" element={<NewRes/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path="signup" element={<SignUp_login/>} />
          </Routes>
       </BrowserRouter>    
      
       {/* <SignUp_login/> */}

      
    </>
  )
}
export default App;