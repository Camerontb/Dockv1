import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react/cjs/react.production.min";
// import { Component } from "react/cjs/react.production.min";
import Title from "./Title";
import CardExampleGroups from "./CardExampleGroups"

class Main extends Component{
    render(){
        return(
            <div>
                <Title title="Dockit"/>
                <CardExampleGroups/>
            </div>
        )
    }
}

export default Main;