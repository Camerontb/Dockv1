import React from "react";
// import ReactDOM from "react-dom";
import { Component } from "react/cjs/react.production.min";
// import { Component } from "react/cjs/react.production.min";
import Title from "./Title";
import CardExampleGroups from "./CardExampleGroups"
// import App from './App'

class Main extends Component{
    render(){
        return(
            <div className="Maindiv">
                <Title title="DockIt "/>
                <CardExampleGroups/>
                
            </div>
        )
    }
}

export default Main;