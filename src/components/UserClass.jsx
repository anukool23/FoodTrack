import React from "react"


class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            userInfo:{}
        }
        
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/anukool23");
        const json = await data.json();
        console.log(json)

        this.setState({userInfo:json})
    }
    render(){
        const {name} = this.state.userInfo
        return (
    <div className='user-card'>
        <h1>{name} </h1>
         </div>
  )
    }
}

export default UserClass