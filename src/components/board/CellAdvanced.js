import { useEffect, useState } from 'react';
import Button from '../Button';
import CellSmall from './CellSmall';
import Modal from '../Modal';
import { generateID } from '../Panel';

export default function CellAdvanced(props) {
 const [data, setData] = useState(props.initialData);
 const [modalSmall, setModalSmall] = useState(false);

 useEffect(() => {
  if (props.firstRender === true) {
   props.handleFirstRender(false);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

 const handleToggleModalSmall = () => {
  setModalSmall((prevValue) => !prevValue);
  document.body.classList.toggle('active-modal');
 };

 const handleRemoveCellSmall = (id) => {
  setData((prevData) => {
   return prevData.filter((information) => information.id !== id);
  });
 };

 const handleAddCellSmall = (inputValue) => {
  setData((prevData) => {
   return [
    ...prevData,
    {
     id: generateID(),
     title: inputValue,
    },
   ];
  });
 };

 return (
  <>
   <li className="cell-advanced">
    <ul className="cell-advanced__list">
     <p className="cell-advanced__list-add">{props.info.title}</p>
     {data.map((information) => {
      return <CellSmall key={information.id} information={information} handleRemoveCellSmall={handleRemoveCellSmall} />;
     })}
    </ul>
    <div className="cell-advanced__border border">
     <p className="cell-advanced__and and">And</p>
    </div>
    <div className="cell-advanced__line"></div>
    <Button onClick={() => props.handleRemoveCell(props.info.id)} action={props.action} addClass={'cell-advanced__button-remove'} btnType="1" />
    <Button onClick={handleToggleModalSmall} addClass={'cell-advanced__button-add'} btnType="2" />
    {modalSmall && <Modal maxLength="10" handleAddCell={handleAddCellSmall} handleToggleModal={handleToggleModalSmall} modal={modalSmall} />}
   </li>
  </>
 );
}
