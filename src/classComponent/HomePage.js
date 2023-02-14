import React, { Component } from 'react'
import HomePageHeader from './HomePageHeader'
import Login from './Login'
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <HomePageHeader />
        <Login />
      </div>
    )
  }
}
  