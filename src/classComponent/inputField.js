import React from "react";

class Input extends React.Component{
    render(){
        return(
            <>
                <input onChange={this.props.fun}  value={this.props.value} type={this.props.type} name={this.props.name} style={this.props.style}></input>
            </>
        )
    }
}

export default Input;
