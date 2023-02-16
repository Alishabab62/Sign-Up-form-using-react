import React from "react";
import Input from "./inputField";
import Header from './Header'
import Button from './Button'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      renderingInput:true
    };
  }
  handleInputs = (e) => {
    if (e.target.name === "name") {
      this.setState({
        name: e.target.value,
      });
    } else if(e.target.name === "password") {
      this.setState({
        password: e.target.value,
      });
    }
  };
  inputStyle={
    width:" 100%",
    height:"50px",
    borderRadius:"5px",
    outline:"none",
    border:"1px solid #e3e3e3",
    paddingLeft:"5px",
    marginBottom:"25px",
    fontSize:"25px"
  }
mainDivStyle={
    height:"97vh",
    width:"100%",
    backgroundColor:"white",
}
formDiv={
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    padding:"45px 45px",
    backgroundColor:"white",
    width:"25%",
    borderRadius:"20px",
    border:"1px solid #e3e3e3",
    margin:"50px auto"
}
loginHeadingStyle={
    textAlign:"left",
    width:"100%",
    color:"#282a35",
    fontFamily:"sans-serif",
    fontSize:"29px",
    fontWeight:"700"
}
loginBtn ={
    width:" 100%",
    height:"50px",
    borderRadius:"25px",
    outline:"none",
    border:"none",
    paddingLeft:"5px",
    marginBottom:"25px",
    backgroundColor:"#04aa6d",
    color:"white",
    fontSize:"18px",
    fontWeight:"600",
    cursor:"pointer"
}
labelMainStyle={
    display:"flex",
    justifyContent:"space-between",
    width:"100%"
}
labelStyle={
    textAlign:"left",
    fontSize:"16px",
    fontWeight:"600",
    fontFamily:"Sans-Serif",
    color:"rgb(33,37,41)",
    marginBottom:"8px"
}
forgotPasswordStyle ={
    textDecoration:"none",
    color: "#282a35",
    fontSize:"13px",
    fontWeight:"600",
    fontFamily:"Sans-Serif",
}
   handleLogin = async ()=>  {
      let data={
          email: `${this.state.name}`,
          password:`${this.state.password}`
      }
      const response = await fetch('https://youtube-api-beta.vercel.app/user/login',{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
      });
      let res = await response.json();
      console.log(res)
}   
  render() {
    return (
      <div style={this.mainDivStyle}>
        <Header fun={this.props.fun}/>
        <div style={this.formDiv}>
        <h3 style={this.loginHeadingStyle}>Login</h3>
        <div style={this.labelMainStyle}><p style={this.labelStyle}>Name</p><p style={this.labelStyle}>Need An Account?</p></div>
        <Input
          fun={this.handleInputs}
          value={this.state.name}
          type={"text"}
          name ={"name"}
          style={this.inputStyle}
        />
        <div style={this.labelMainStyle}><p style={this.labelStyle}>Password</p><p style={this.labelStyle}>Show</p></div>
        <Input
          fun={this.handleInputs}
          value={this.state.password}
          type={"password"}
          name="password"
          style={this.inputStyle}
        />
        <Button title={"Login"} style={this.loginBtn} fun={this.handleLogin}/>
        <p><a href="https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fmy-learning.w3schools.com" style={this.forgotPasswordStyle}>Forgot Password</a></p>
        </div>
      </div>
    );
  }
}

export default Login;
