import React from "react";

function Header(){
    return ( 
        <div className="col-md-8 mx-auto">
            <img src="/public/logo.png" alt="" style={{ width: 50,height: 50 }}/>
            <h1>Notes App</h1>
        </div>
     )
}

export default Header;