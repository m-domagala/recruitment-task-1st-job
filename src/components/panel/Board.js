import { useRef } from 'react';
import CellMain from './CellMain';
import Ethnicity from './Ethnicity';
import { generateID } from './Panel';

export default function Board(props) {
 const firstRender = useRef(true);

 const initialEthnicities = () => {
  if (firstRender.current) {
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

 const handleFirstRender = (value) => {
  firstRender.current = value;
 };

 return (
  <>
   <ul className="board">
    {props.infos.map((info) => {
     if (info.type === 'basicCell') {
      return <CellMain key={info.id} info={info} removeCell={props.removeCell} />;
     }
     return <Ethnicity key={info.id} info={info} removeCell={props.removeCell} initialEthnicities={initialEthnicities} firstRender={firstRender.current} handleFirstRender={handleFirstRender} />;
    })}
   </ul>
  </>
 );
}
