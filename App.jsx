import React,{Component} from "react";
import reactDOM from "react-dom"
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Component3 from "./Components/Component3";
import Component4 from "./Components/omponent4";
import Footer from "./Components/Footer";
import Card1 from "./Card1";


export default class App extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <>
      <div style={{position:'sticky', top:0}}>
        <Header/>
       <Nav/>
      </div>
      <Component1/>
      <Component2/>
      <Component3/>
      <Component4/>
      <Card1/>
      <Footer/>
      </>
    )
  }
}