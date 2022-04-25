import React from "react";
// import ReactDOM from "react-dom";
import { Component } from "react/cjs/react.production.min";
// import { Component } from "react/cjs/react.production.min";
import Title from "./Title";
import CardExampleGroups from "./LodgeNew"
import App from './App'
import Posts from './Posts'

class Main extends Component{
    render(){
        return(
            <div className="Maindiv">
                <Title title="DockIt "/>
                {/* <CardExampleGroups/> */}
                <App/>
                <Posts/>
            </div>
        )
    }
}

export default Main;