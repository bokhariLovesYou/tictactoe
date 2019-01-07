import React from 'react';
import Boxes from './Boxes';

  /* 
    The Panel Starts Here
  */

  const Panel = (props) => {

      return (
        <div className="panel container">
          <div className="row">
            {props.allBoxes.map ( (box, index) => 
              <Boxes 
                key={index}
                name={box.name}
                currentIcon={box.currentIcon}
                classList='col-4 border-red my-box'
                renderUserIcon={box.userIcon}
                renderComputerIcon={box.computerIcon}
                index={index}
                addUserBoolean={props.addUserBoolean}
                currentValue={box.currentValue}
                addUserIcon={props.addUserIcon}
              />  
            )}
          </div>
        </div>
      );
    }


export default Panel;
