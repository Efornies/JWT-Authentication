import React, {useState} from "react";

export const Register = () => {
    const [user, setUser] = useState({})

    const sendUserIfo =() => {
        const response = await fetch("https://3001-efornies-jwtauthenticat-e1fsfmbwbg6.ws-eu43.gitpod.io/api/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        });

        const data = await response.json();
        console.log(data)
    }
    return <div className="text-center mt-5">
        <div className="row">
        <label htmlFor="email" className="col-1">Email</label>
        <input id="email" className="col-3" onChange={(e)=> setUser({...user, email:e.target.value})} ></input>
        <label htmlFor="pasword" className="col-1">Pasword</label>
        <input id="password" className="col-3" onChange={(e)=>setUser({...user, password:e.target.value})} ></input>
        <button className="col-2 offset-1" onClick={()=> sendUserIfo()}> Register new user </button>
        </div>
        
    </div>
}