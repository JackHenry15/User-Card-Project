import React from 'react';
import axios from 'axios';
import './App.css';
// import User from './components/user';
import UserCard from './components/usercard';
import Followers from './components/user';

class App extends React.Component{
  state = {
    userCard: [],
    followers: [
      {
        avatar_url: "https://avatars.githubusercontent.com/u/77174003?v=4",
        bio: "Aspiring fullstack developer!",
        following: 1,
        html_url: "https://github.com/JackHenry15",
        id: 77174003,
        location: "Null",
        login: "JackHenry15",
        name: "Jack Henry",
        url: "https://api.github.com/users/JackHenry15"
      },
      {
        avatar_url: "https://avatars.githubusercontent.com/u/77174003?v=4",
        bio: "Aspiring fullstack developer!",
        following: 1,
        html_url: "https://github.com/JackHenry15",
        id: 77174003,
        location: "Null",
        login: "JackHenry15",
        name: "Jack Henry",
        url: "https://api.github.com/users/JackHenry15"
      },
      {
        avatar_url: "https://avatars.githubusercontent.com/u/77174003?v=4",
        bio: "Aspiring fullstack developer!",
        following: 1,
        html_url: "https://github.com/JackHenry15",
        id: 77174003,
        location: "Null",
        login: "JackHenry15",
        name: "Jack Henry",
        url: "https://api.github.com/users/JackHenry15"
      }
    ]
  }

  componentDidMount(){
    console.log("App: Component Mounts");
    axios.get(`https://api.github.com/users/JackHenry15`)
    .then(res=>{
      console.log(res);
      console.log("App: Api Complete");
      this.setState({
        userCard: res.data,
      })
    })
    .catch(err=>{
      console.log('error', err);
    })
    //getting followers data
    
    axios.get(`https://api.github.com/users/JackHenry15/followers`)
      .then(res=>{
        console.log(res);
        this.setState({
            // followers: res.data
            followers: [...this.state.followers, res.data[0]]
            //I did this to practice formatting of multiple followers
        })
      })
      .catch(err=>{
        console.log('error', err);
      })
  }

  render(){
    console.log("App: Component Renders");
    return(
      <div className="App">
        <h1>User Card</h1>
        <div className="user-card-container">
          {
           <UserCard user={this.state.userCard}/>
          }
        </div>
        <br></br>
        <div>
          <h1>Followers of {this.state.userCard.name}</h1>
          {
            <Followers user={this.state.followers}/>
          }
        </div>
      </div>
      
    )
  }




}
export default App;
