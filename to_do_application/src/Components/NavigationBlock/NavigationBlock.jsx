import React from "react";
import { Outlet,Link } from "react-router-dom";
import './NavigationBlock.css'

export default function NavigatopBlockage(){
    return(
        <div className="NavigationBlock">
            <h1>Hello username!</h1>
            <nav>
                <Link to='/App'>App</Link> |{' '} 
                <Link to='/About'>About</Link>
            </nav>
            <Outlet/>
        </div>
    )
}