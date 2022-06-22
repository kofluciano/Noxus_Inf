import React from "react"
import logo from '../assets/noxus.webp'
const Header = () => {
    return(
        <>    
            <div className="hdiv">
                <div>
                    <img src={logo} className="logo"/>
                </div>
                <div>
                    <h1>Noxus Informatica</h1>
                </div>
           </div>
        </>
    )
 }
export default Header