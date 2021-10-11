import { useRef } from 'react';
import CellAdvanced from './CellAdvanced/CellAdvanced';
import CellMain from './CellMain/CellMain';
import { generateID } from '../Panel';

export default function Board(props) {
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
    {props.infos.map((info) => {
     if (info.type === 'cellMain') {
      return <CellMain key={info.id} info={info} handleRemoveCell={props.handleRemoveCell} />;
     }
     return <CellAdvanced key={info.id} info={info} handleRemoveCell={props.handleRemoveCell} initialData={initialData} firstRender={firstRender.current} handleFirstRender={handleFirstRender} />;
    })}
   </ul>
  </>
 );
}
