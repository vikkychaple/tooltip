import React from "react";
import "./App.css";
import Tooltip from "./Tooltip";

// App component
class App extends React.Component{


  constructor(){
    super();
    // Initialize state with 'position' and 'hovering' properties
    this.state ={
      positoin: "top",
      hovering: false
    };
  }

  // handle click
  handleClick = (pos) =>{
    // Update the 'position' state based on the clicked button
    this.setState({
      position: pos
    })
  };

  // mouseEnter functionality
  handleMouseEnter = () =>{
    // Set 'hovering' to true when mouse enters the button
    this.setState({hovering: true});
  };

  // mouseLeave functionality
  handleMouseLeave = () =>{
    // Set 'hovering' to false when mouse leaves the button
    this.setState({hovering: false});
  };



  render(){
    return (
      <div  className="App">
        {/* Container for button selection */}
        <div className="btn-position">

          <div className="grp-name">
            Select hovering position
          </div><br/>
                {/* Buttons for selecting tooltip position */}
          <button
          className={this.state.position === "top" ? "btn active" : "btn"}
          onClick={(e)=>{this.handleClick("top")}}
          >
            Top
          </button>

          <button
          className={this.state.position === "left" ? "btn active" : "btn"}
          onClick={(e)=>{this.handleClick("left")}}>
            Left
          </button>

          <button
          className={this.state.position === "right" ? "btn active" : "btn"}
          onClick={(e)=>{this.handleClick("right")}}>
            Right
          </button>

          <button
          className={this.state.position === "down" ? "btn active" : "btn"}
          onClick={(e)=>{this.handleClick("down")}}>
            Bottom
          </button>
        </div>

       {/* Container for the button that triggers the tooltip */}
        <div id="button-container">
           {/* Button that triggers the tooltip */}
          <button
          className="btn hover-btn"
          onMouseOver={this.handleMouseEnter}
          onMouseOut={this.handleMouseLeave}
          >
            Hover Over Me!!!
          </button>
          {/* Display the tooltip when hovering */}
          {this.state.hovering && <Tooltip position={this.state.position}  />}
        </div>

          

      </div>
    );
  }
}

export default App;