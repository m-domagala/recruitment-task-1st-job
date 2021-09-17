import { useEffect, useState } from 'react';
import CellMain from './CellMain';
import Ethnicity from './Ethnicity';
import { generateID } from './Common';

export default function Board(props) {
 const [firstRender, setFirstRender] = useState(true);

 const initialEthnicities = () => {
  if (firstRender) {
   return [
    {
     id: generateID(),
     title: 'Black',
    },
    {
     id: generateID(),
     title: 'Hispanic',
    },
   ];
  } else return [];
 };

 return (
  <>
   <ul className="board">
    {props.infos.map((info) => {
     if (info.type === 'basicCell') {
      return <CellMain key={info.title} info={info} removeCell={props.removeCell} />;
     }
     return <Ethnicity key={info.title} info={info} removeCell={props.removeCell} initialEthnicities={initialEthnicities} firstRender={firstRender} setFirstRender={setFirstRender} />;
    })}
   </ul>
  </>
 );
}
