import React, { Component } from 'react'; 

  /* 
    Individual Boxes start here
  */


  class Boxes extends Component {

    render() {

    let index = this.props.index;
    


      return (
        <div className={this.props.classList} id={this.props.name} onClick={() => this.props.addUserIcon(index) }>
          <span className="icon">{this.props.currentValue}</span>
        </div>
      );
  }
}


  export default Boxes;