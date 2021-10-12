import { useEffect, useState } from 'react';
import CellAdvanced from './CellAdvanced/CellAdvanced';
import CellMain from './CellMain/CellMain';
import { generateID } from '../Panel';

export default function Board({ handleRemoveCell, infos }) {
 const [firstRender, setFirstRender] = useState(true);

 const initialData = () => {
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

 useEffect(() => {
  if (firstRender) {
   setFirstRender(() => false);
  }
 }, [firstRender]);

 return (
  <>
   <ul className="board">
    {infos.map((info) => {
     if (info.type === 'cellMain') {
      return <CellMain key={info.id} handleRemoveCell={handleRemoveCell} info={info} />;
     }
     return <CellAdvanced key={info.id} handleRemoveCell={handleRemoveCell} info={info} initialData={initialData} />;
    })}
   </ul>
  </>
 );
}
