import React from "react";

class Input extends React.Component{
    render(){
        return(
            <>
                <input onChange={this.props.fun} placeholder={this.props.placeholder} value={this.props.value} type={this.props.type}></input>
            </>
        )
    }
}

export default Input;
