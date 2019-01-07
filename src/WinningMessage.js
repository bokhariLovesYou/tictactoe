import React from 'react';


  /* 
    Winning Message
  */


  const WinningMessage = (props) => {

      return (
        <div className="winning-parent">
          <div className={props.winningClass}>
            <h2>{props.winningMessage}</h2>
          </div>
          <div onClick={props.restartOnClick} className={props.restartClass}>
            <h2>{props.restart}</h2>
          </div>
        </div>
      );
    }




export default WinningMessage;
