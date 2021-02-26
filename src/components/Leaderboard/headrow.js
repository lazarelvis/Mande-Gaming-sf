import React from 'react';
const HeadRow = () => {
    return ( 
        <>
            <tr>
                <th style={{textAlign: 'left'}}>User</th>
                <th style={{textAlign: 'center',paddingLeft:0,paddingRight:90}}>Game</th>
                <th style={{textAlign: 'right'}}>Score</th>
            </tr>
        </>
     );
}
 
export default HeadRow;