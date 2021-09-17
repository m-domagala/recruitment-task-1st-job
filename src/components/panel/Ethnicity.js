import React, { useEffect, useState } from 'react';
import Button from './Button';
import CellSmall from './CellSmall';

export default function Ethnicity(props) {
 const [ethnicities, setEthnicities] = useState(props.initialEthnicities);

 if (props.firstRender) {
  props.setFirstRender(false);
 }

 const handleRemoveSmallCell = (targetID) => {
  console.log('remove cell');
  setEthnicities((prevEthnicities) => {
   return prevEthnicities.filter((ethnicity) => ethnicity.id !== targetID);
  });
 };

 return (
  <>
   <li className="ethnicity">
    <ul className="ethnicity__list">
     <p className="ethnicity__list-add">{props.info.title}</p>
     {ethnicities.map((ethnicity) => {
      return <CellSmall key={ethnicity.id} ethnicity={ethnicity} removeSmallCell={handleRemoveSmallCell} />;
     })}
    </ul>

    <div className="ethnicity__border">
     <p className="ethnicity__and">And</p>
    </div>
    <div className="ethnicity__line"></div>
    <Button onClick={() => props.removeCell(props.info.id)} action={props.action} addClass={'ethnicity__button-1'} btnType="1" />
    <Button addClass={'ethnicity__button-2'} btnType="2" />
   </li>
  </>
 );
}
