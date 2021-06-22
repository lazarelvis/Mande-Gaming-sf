import React from 'react';
import Slide  from 'react-reveal/Bounce';
import Bonce  from 'react-reveal/Bounce';

const Row = (props) => {
  return (            
    <>
    <Bonce >
      <tr>
      <Slide top cascade>
        <td style={{ textAlign: 'left' }}>
          #{props.number} {props.nume}
        </td>
        <td style={{ textAlign: 'center', paddingLeft: 0, paddingRight: 90 }}>
          {props.joc}
        </td>
        <td style={{ textAlign: 'right' }}>{props.scor}</td>
        </Slide >

      </tr>
      </Bonce>
    </>
  );
};

export default Row;
