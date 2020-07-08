import React, { Component } from "react";
import Navigation from "../components/navigation"

class NavigationButton extends Component {
  constructor(){
    super()
    this.state = {
      visible: false,
      value: '+',
    }
    
  }
  toggleMenu = () => {
    if (this.state.value == '+'){
      this.setState({
        visible: true,
        value: '-'
      })
  } else {
    this.setState({
      visible: false,
      value: '+'
    })
  }
  }
  render() {
    return (
      <div>
        <button className="navButton" onClick={this.toggleMenu}>{this.state.value}</button>
        {this.state.visible ? (
          <Navigation />
        ):(<div></div>)}
        
    </div>
    );
  }
}


export default NavigationButton;