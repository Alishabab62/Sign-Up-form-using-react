import Form from "./form";
import React from "react";
function App() {
    let [inputs ,setInputs] =React.useState({});
    
        function handleInputs(e){
            setInputs({...inputs , [e.target.name]: e.target.value})
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
      <Form type={"text"} placeholder={"Name"}  value={inputs.Name} style={inputStyle} name={"Name"} fun={handleInputs}/>
      <Form type={"text"} placeholder={"Username"}  value={inputs.username} style={inputStyle} name={"username"} fun={handleInputs}/>
      <Form type={"email"} placeholder={"Email"}  value={inputs.email} style={inputStyle} name={"email"} fun={handleInputs}/>
      <Form type={"password"} placeholder={"Password"}  value={inputs.password} style={inputStyle} name={"password"} fun={handleInputs}/>
      <button style={inputStyle} >Submit</button>
    </div>
    </div>
  );
}

export default App;
