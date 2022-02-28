import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react/cjs/react.production.min";
// import { Component } from "react/cjs/react.production.min";
import Title from "./Title";
import CardExampleGroups from "./CardExampleGroups"
import Create from "./Create";

class Main extends Component{
    render(){
        return(
            <div>
                <Title title="Dockit"/>
                <CardExampleGroups/>
                <Create/>
            </div>
        )
    }
}

export default Main;