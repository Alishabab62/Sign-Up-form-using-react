import React from "react";
import Input from "./inputField";

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    handleInputs = (e)=> {
        this.setState({
            ...this.state,[e.target.name]:e.target.value
        })
    }
    handleLogin =()=>{
        console.log(this.state.name + "Hello")
    }
    render(){
        return(
            <>
            <Input fun={this.handleInputs} value={this.state.name}  placeholder={"Name"} type={"text"} name="name"/>
            <Input fun={this.handleInputs} value={this.state.password}  placeholder={"Password"} type={"password"} name="password"/>
            <button onClick={this.handleLogin}>Login</button>
            </>
        )
    }
}


export default Login;