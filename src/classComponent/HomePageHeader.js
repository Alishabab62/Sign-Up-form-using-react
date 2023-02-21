import { Component } from "react";
import Button from "./Button";
import DropDownIcon from "./DropDownIcon";
import Logo from "./Logo";
import { Link } from "react-router-dom";


export default class HomePageHeader extends Component {
// constructor(){
//     super()
//     this.state({
//         loginRender:false
//     })
// }
headerStyle={
    height:"90px",
    backgroundColor:"#161d30",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
}
logoStyle={
    height:"45px",
    width:"45px",
    margin:"0px 20px"
}
leftDiv={
    height:"100%",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
}
tabStyle={
    backgroundColor:"transparent",
    border:"none",
    padding:"35px 0px",
    fontSize:"18px",
    color:"white",
    fontWeight:"bold"
}
getCertifiedBtnStyle={
    backgroundColor:"rgb(255,192,199)",
    fontSize:"18px",
    cursor:"pointer",
    color:"black",
    fontFamily:"Sans-Serif",
    padding:"13px 16px",
    borderRadius:"25px",
    margin:"0px 10px",
    fontWeight:"600"
}
createWebsiteBtn={
    backgroundColor:"#FFF4A3",
    fontSize:"18px",
    cursor:"pointer",
    color:"black",
    fontFamily:"Sans-Serif",
    padding:"13px 16px",
    borderRadius:"25px",
    margin:"0px 10px",
    fontWeight:"600" 
}

loginBtnStyle={
    backgroundColor:"#04AA6D",
    fontSize:"18px",
    cursor:"pointer",
    color:"white",
    fontFamily:"Sans-Serif",
    padding:"13px 36px",
    borderRadius:"25px",
    margin:"0px 10px",
    fontWeight:"600" 
}

    

  render() {
  
    return (
      <>
        <header style={this.headerStyle}>
            <div style={this.leftDiv}>
            <Logo style={this.logoStyle}/>
            <Button title="Tutorials" style={this.tabStyle} /><DropDownIcon/>
            <Button title="References" style={this.tabStyle}/><DropDownIcon/>
            <Button title="Exercise" style={this.tabStyle}/><DropDownIcon/>
            <Button title="Sign Up" style={this.tabStyle}/>
            </div>
            <div>
            <Button title="Get Certified" style={this.getCertifiedBtnStyle}/>
            <Button title="Create website" style={this.createWebsiteBtn} />
              <Link to="/login">
            <Button title={"Login"}  style={this.loginBtnStyle} fun ={this.props.fun} />
              </Link>
            </div>
        </header>
      </>
    )
  }
}
