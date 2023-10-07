import React from "react";

// Define a class-based Tooltip component

class Tooltip extends React.Component{

  // Method to determine the CSS class based on the 'position' prop
    classn = () =>{
        return `${this.props.position}`;
    }

    // Render method to display the tooltip
    render(){
        return (
            <div className={`${this.classn()}`}>
                Thanks for hovering! I'm a tooltip

            </div>
        )
    }
}

export default Tooltip;