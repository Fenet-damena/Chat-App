import { useState } from "react"
import "./login.css"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const  [avatar,setAvatar] = useState({
        file:null,
        url:""
    })
    const handleAvatar = e =>{
        if(e.targate.file[0]){
            setAvatar({
                file:e.targate.file[0],
                url: URL.createObjectURL(e.target.file[0])
            })

        }
     
    }

   

    const handleLogin = e =>{
        e.preventDefault()
        
    }

   
    return (
        <div className="login">
            <div className="item">
                <h2>Welcome back,</h2>
                <form onSubmit={handleLogin} >
                    <input type="text" placeholder="Email" name="email"/>
                    <input type="password" placeholder="Password" name="password"/>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
            <h2>Create an Account</h2>
                <form onSubmit={handleRegister} >
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        Upload an image</label>
                    <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
                    <input type="text" placeholder="Username" name="username"/>
                    <input type="text" placeholder="Email" name="email"/>
                    <input type="password" placeholder="Password" name="password"/>
                    <button>Sign In</button>
                </form>
            </div>
        </div>
    )
}
export default Login