import { useState } from "react";
import "./cL.css"
import AddUser from "./addUser/AddUser";
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
        <div className="items">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>lala fenet</span>
                <p>selam</p>
            </div>
        </div>
        <div className="items">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>lala fenet</span>
                <p>selam</p>
            </div>
        </div>
        <div className="items">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>lala fenet</span>
                <p>selam</p>
            </div>
        </div>
        <div className="items">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>lala fenet</span>
                <p>selam</p>
            </div>
        </div>
        {addMode && <AddUser/>}
            </div>
          
    );
};
export default CL