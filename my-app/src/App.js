import React from 'react';
import axios from 'axios';

// import User from './components/user';
import UserCard from './components/usercard';

class App extends React.Component{
  state = {
    userCards: []
  }

  componentDidMount(){
    console.log("App: Component Mounts");
    axios.get(`https://api.github.com/users/JackHenry15`)
    .then(res=>{
      console.log(res);
      console.log("App: Api Complete");
      this.setState({
        userCards: res.data,
      })
    })
    .catch(err=>{
      console.log('error', err);
    })
  }

  render(){
    console.log("App: Component Renders");
    return(
      <div>
        <h1>User Cards</h1>
        <div className="card container">
          {
           <UserCard user={this.state.userCards}/>
          }
        </div>
      </div>
      
    )
  }




}
export default App;
