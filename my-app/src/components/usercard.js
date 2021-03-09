import React from 'react';
import axios from 'axios';

class UserCard extends React.Component {
    state = {
        followers: []
      }

    componentDidMount(){
        console.log("App: Component Mounts");
        axios.get(`https://api.github.com/users/JackHenry15/followers`)
        .then(res=>{
        //   console.log(res);
        //   console.log("App: Api Complete");
          this.setState({
            followers: res.data,
          })
        })
        .catch(err=>{
          console.log('error', err);
        })
    }

    render(){
        const { user } = this.props;
        console.log(`User ${user.login}: Renders`);
        return(
            <div key={user.id} className="usercard">
                <img src={user.avatar_url}/>
                <div>
                    <h3>{user.login}</h3>
                    <p>Name: {user.name}</p>
                    <p>Followers: {user.followers}</p>
                </div>
            </div>
        )
    }


}

export default UserCard;