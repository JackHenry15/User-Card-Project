import React, { useEffect } from 'react';
import UserCard from './usercard';
import '../App.css';

function Followers(props) {
    useEffect(() => {
        console.log("Users: Component Mounts");
    })

    useEffect(() => {
        console.log("Users: Component Updates");
    });
    console.log("Users: Component Renders");
    return(
        <div  className="followers-card-container">
        {props.user.map(user => (
            <div className="user-card-container">
            <UserCard user={user}/>
            </div>
        ))}
        </div>
    )
}

export default Followers;