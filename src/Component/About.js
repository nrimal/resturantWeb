import React from 'react'
import { Switch, Route } from 'react-router-dom'

const About = () => (
  <div>
    <div className="about-container">
    <h1>About our food!</h1>
    </div>
    <div className="info-cont">
      <label>Nepal</label>
    </div>
    <div className="info-cont">
      <label>India</label>
    </div>
    <div className="info-cont">
      <label>Tibet</label>
    </div>
  </div>
)

export default About

//   <Switch>
//   <Route exact path='/roster' component={FullRoster}/>
//   <Route path='/roster/:number' component={Player}/>
// </Switch>