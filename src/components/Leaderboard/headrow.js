import React from 'react';
import Fade from 'react-reveal/Fade';

const HeadRow = () => {
    return ( 
        <>
            <thead>
            <Fade top>
                <tr>
                    <th style={{textAlign: 'left'}}>User</th>
                    <th style={{textAlign: 'center',paddingLeft:0,paddingRight:90}}>Game</th>
                    <th style={{textAlign: 'right'}}>Score</th>
                </tr>
            </Fade>
            </thead>
        </>
     );
}
 
export default HeadRow;