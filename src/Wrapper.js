import React from 'react';
import Header from './Header.js';

  /* 
    And this is the final where all the components are embedded.
  */

  const Wrapper = () => {
    return (
        <div className="container">
          <Header 
            title="Tic Tac Toe"
            desc="This is a small app in which you could play Tic Tac Toe with the computer"
          /> 
          <Panel />
        </div>

      );
  }



export default Wrapper;