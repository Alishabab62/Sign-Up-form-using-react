import Form from "./form";
import React from "react";
function App() {
    let [name ,setName] =React.useState("");
    let [email ,setEmail] =React.useState("");
    let [username ,setUsername] =React.useState("");
    let [password ,setPassword] =React.useState("");
    
        function handleName(e){
            setName(e.target.value)
        }
        function handleEmail(e){
            setEmail(e.target.value)
        }
        function handleUsername(e){
            setUsername(e.target.value)
        }
        function handlePassword(e){
            setPassword(e.target.value)
        }
        let inputStyle={
          width:"80%",
          height:"30px",
          borderRadius:"5px",
          outline:"none",
          border:"none",
          paddingLeft:"5px",
          marginBottom:"25px"
        }


  return (
    <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , backgroundColor:"gray" , height:"100vh"}}>
      <div style={{ backgroundColor:"rgb(220, 122, 245)" , width:"30%" , display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column" , borderRadius:"5px"}}>
      <h3 style={{fontSize:"25px" , fontFamily:"sans-serif" , margin:"30px 30px"}}>Sign Up Form</h3>
      <Form type={"text"} placeholder={"Username"}  value={name} style={inputStyle} fun={handleName}/>
      <Form type={"text"} placeholder={"Name"}  value={username} style={inputStyle} fun={handleUsername}/>
      <Form type={"email"} placeholder={"Email"}  value={email} style={inputStyle} fun={handleEmail}/>
      <Form type={"password"} placeholder={"Password"}  value={password} style={inputStyle} fun={handlePassword}/>
      <button style={inputStyle} >Submit</button>
    </div>
    </div>
  );
}

export default App;
