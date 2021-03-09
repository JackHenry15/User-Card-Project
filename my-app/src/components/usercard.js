import React from 'react';
import axios from 'axios';

class UserCard extends React.Component {


    

    render(){
        const { user } = this.props;
        console.log(`User ${user.login}: Renders`);
        return(
            <div key={user.id} className="usercard">
                <img src={user.avatar_url}/>
                <div>
                    <h3>{user.login}</h3>
                    <a href={user.html_url}>URL</a>
                    {/* <p>Name: {user.name}</p>
                    <p>Followers: {user.followers}</p> */}
                </div>
            </div>
        )
    }


}

export default UserCard;