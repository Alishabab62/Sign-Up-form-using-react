import React, { Component } from 'react'
import HomePageHeader from './HomePageHeader'
import Login from './Login'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
export default class HomePage extends Component {
  constructor(){
    super()
    this.state = ({
      renderLogin:true,
    })
  }


  render() {
  //  let handleLogin = ()=>{
  //   console.log("Hello")
  //     if(this.state.renderLogin === true){
  //       this.setState({
  //         renderLogin:false
  //       })
  //     }
  //     else{
  //       this.setState({
  //         renderLogin:true
  //       })
  //     }
  //     }
    return (
      <div>
        {/* {this.state.renderLogin ? <HomePageHeader fun={handleLogin}/> :  <Login fun={handleLogin}/>} */}
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePageHeader/>} ></Route>
              <Route path='/login' element={<Login/>} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
  