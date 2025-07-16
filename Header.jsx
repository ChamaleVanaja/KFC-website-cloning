import React,{Component} from "react";
import reactDOM from "react-dom"
export default class Header extends Component{
    render(){
        return(
          <>
            <div className="header-bar">
          <p>
          📌Allow location access for local store menu and promos
          <button>
            <a href="#">Set Location</a>
          </button>
        </p>
      </div>
      </>
        )
    }
}