import React, { Component } from 'react';
import User from "./User";
console.clear();

class Users extends Component {
  constructor(props){
    super(props);

    this.state={
      users: []
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api?results=25")
    .then(response=>{
      return response.json();
    }).then((data) =>{
      console.log(data);
      const updatedData = data.results.map((users) => {
        const updatedUsers = {
          ...users,
          isLiked: false
        }
        return updatedUsers;
      })
      this.setState({
        users: updatedData
      });
    });
  }

  componentDidUpdate(){
    console.log(this.state.users);
  }

  render() {
    return (
      <ul>
        {
          // we destructured user because it's always repeating it - just keeps it neater
          this.state.users.map((user, index) => {
            const {picture, name} = user;
            return(
              <User name={name} />
              );
            })}
          </ul>
        );
      }
    }
            // <li>
            //   <img src={picture.large} />
            //   <h2>{name.first} {name.last}</h2>
            //   <button onClick={() => {
            //     // find index of users to update
            //     console.log("clicked");
            //     const foundIndex = this.state.users.findIndex((users) => users.id === index + 1
            //     );
            //     const foundUsers = this.state.users.find((users) => users.id === index + 1
            //     );
            //     console.log(foundUsers);

            //     // update the users
            //     const updatedUsers = {
            //       ...foundUsers,
            //       isLiked: !foundUsers.isLiked
            //     };
                
            //     // create copy of state
            //     const copy = [...this.state.users]
            //     // mutate copy
            //     copy.splice(foundIndex, 1, updatedUsers);
            //     // set state with updated state
            //     this.setState({
            //       characters: copy
            //     });
            //   }}
            //   >
            //   Show Details
            //   </button>
            // </li>


export default Users;