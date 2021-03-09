import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    userCards: []
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/JackHenry15`)
    .then(res=>{
      console.log(res);
      // this.setState({
      //   userCards: res.data,
      // })
    })
    .catch(err=>{
      console.log('error', err);
    })
  }

  render(){
    return(
      <div>
        <h1>User Cards</h1>
        <div className="card container">
          {
            this.state.userCards.map(user => {
              return(<div/>)
            })
          }
        </div>
      </div>
      
    )
  }




}
export default App;
