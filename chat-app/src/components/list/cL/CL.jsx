import { useState } from "react";
import "./cL.css"
const CL = () => {
    const [addMode,setAddMode]= useState(false)
    return (
        <div className='cL'>
            <div className="search">
            <div className="searchBar">
            <img src="./search.png" alt="" />
            <input type="text" placeholder="Search"/>
           </div>
           <img src={addMode ?  "./minus.png":"./plus.png" }alt="" className="add"
           onClick={() => setAddMode((pre) => !pre)}/>
        </div>
            </div>
          
    );
};
export default CL