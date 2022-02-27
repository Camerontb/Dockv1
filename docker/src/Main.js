import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react/cjs/react.production.min";
// import { Component } from "react/cjs/react.production.min";
import Title from "./Title";

class Main extends Component{
    render(){
        return(
            <div>
                <Title title="Dockit"/>
            </div>
        )
    }
}

export default Main;