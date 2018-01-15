import React from 'react'
import Header from './Header'
import Main from './Main'

var divStyle = {
    padding: "0px"
}
const App = () => (
    <div className="container-fluid" style={divStyle}>
    <Header />
    <Main />
    </div>
)

export default App;
