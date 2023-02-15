import React, { Component } from 'react'
import HomePageHeader from './HomePageHeader'
import Login from './Login'
export default class HomePage extends Component {
  constructor(){
    super()
    this.state = ({
      renderLogin:true,
    })
  }


  render() {
   let handleLogin = ()=>{
      if(this.state.renderLogin === true){
        this.setState({
          renderLogin:false
        })
      }
      else{
        this.setState({
          renderLogin:true
        })
      }
      }
    return (
      <div>
        {this.state.renderLogin ? <HomePageHeader fun={handleLogin}/> :  <Login fun={handleLogin}/>}
      </div>
    )
  }
}
  