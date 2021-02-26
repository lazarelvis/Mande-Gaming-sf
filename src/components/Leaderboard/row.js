import React from 'react';
const Row = (props) => {
    return ( 
        <>
        <tr>
            <td style={{textAlign: 'left'}}>#{props.number} {props.nume}</td>
            <td style={{textAlign: 'center',paddingLeft:0,paddingRight:90}}>{props.joc}</td>
            <td style={{textAlign: 'right'}}>{props.scor}</td>
        </tr>
        </>
     );
}
 
export default Row;