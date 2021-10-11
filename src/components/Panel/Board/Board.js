import { useRef } from 'react';
import CellAdvanced from './CellAdvanced/CellAdvanced';
import CellMain from './CellMain/CellMain';
import { generateID } from '../Panel';

export default function Board({ handleRemoveCell, infos }) {
 const firstRender = useRef(true);

 const initialData = () => {
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
    {infos.map((info) => {
     if (info.type === 'cellMain') {
      return <CellMain key={info.id} handleRemoveCell={handleRemoveCell} info={info} />;
     }
     return <CellAdvanced key={info.id} firstRender={firstRender.current} handleFirstRender={handleFirstRender} handleRemoveCell={handleRemoveCell} info={info} initialData={initialData} />;
    })}
   </ul>
  </>
 );
}
