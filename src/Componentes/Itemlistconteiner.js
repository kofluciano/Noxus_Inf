import React from "react"
import Itemlist from "./Itemlist"
import Itemcount from "./Itemcount"


function Itemlistconteiner() {
    return (
        <>
            <div className="destacados">
                <h2>DESTACADOS</h2>
            </div>
            <Itemlist/>
            <Itemcount/>
        </>

    )
}
export default Itemlistconteiner