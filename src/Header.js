import React from 'react';
import WinningMessage from './WinningMessage';


  /* 
    Header starts here
  */

  const Header = (props) => {
    return (
        <header className="text-center">
          <h1 className="bold">{props.title}</h1>
          <p className="bold">{props.desc}</p>

          <WinningMessage
            winningMessage={props.winningMessage}
            winningClass={props.winningClass}
            restart={props.restart}
            restartClass={props.restartClass}
            restartOnClick={props.restartOnClick}
           />
        </header>
      );
  }

  export default Header;