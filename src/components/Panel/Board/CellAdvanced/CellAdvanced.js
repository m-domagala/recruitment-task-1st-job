import { useState } from 'react';
import Button from '../../common/Button/Button';
import CellSmall from './CellSmall/CellSmall';
import Modal from '../../common/Modal/Modal';
import { generateID } from '../../Panel';

export default function CellAdvanced({ handleRemoveCell, info, initialData }) {
 const [data, setData] = useState(initialData);
 const [modalSmall, setModalSmall] = useState(false);

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
     <p className="cell-advanced__list-add">{info.title}</p>
     {data.map((information) => {
      return <CellSmall key={information.id} handleRemoveCellSmall={handleRemoveCellSmall} information={information} />;
     })}
    </ul>

    <div className="cell-advanced__border border">
     <p className="cell-advanced__and and">And</p>
    </div>

    <div className="cell-advanced__line"></div>

    <Button btnClassName={'cell-advanced__button-remove'} btnOnClick={() => handleRemoveCell(info.id)} btnType="1" />

    <Button btnClassName={'cell-advanced__button-add'} btnOnClick={handleToggleModalSmall} btnType="2" />

    {modalSmall && <Modal handleAddCell={handleAddCellSmall} handleToggleModal={handleToggleModalSmall} maxLength="10" />}
   </li>
  </>
 );
}
