import { useEffect, useState } from 'react';
import Button from './Button';
import CellSmall from './CellSmall';
import Modal from './Modal';
import { generateID } from './Panel';

export default function Ethnicity(props) {
 const [ethnicities, setEthnicities] = useState(props.initialEthnicities);
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
  setEthnicities((prevEthnicities) => {
   return prevEthnicities.filter((ethnicity) => ethnicity.id !== id);
  });
 };

 const handleAddCellSmall = (inputValue) => {
  setEthnicities((prevInfos) => {
   return [
    ...prevInfos,
    {
     id: generateID(),
     title: inputValue,
    },
   ];
  });
 };

 return (
  <>
   <li className="ethnicity">
    <ul className="ethnicity__list">
     <p className="ethnicity__list-add">{props.info.title}</p>
     {ethnicities.map((ethnicity) => {
      return <CellSmall key={ethnicity.id} ethnicity={ethnicity} handleRemoveCellSmall={handleRemoveCellSmall} />;
     })}
    </ul>

    <div className="ethnicity__border">
     <p className="ethnicity__and">And</p>
    </div>
    <div className="ethnicity__line"></div>
    <Button onClick={() => props.removeCell(props.info.id)} action={props.action} addClass={'ethnicity__button-1'} btnType="1" />
    <Button onClick={handleToggleModalSmall} addClass={'ethnicity__button-2'} btnType="2" />
    {modalSmall && <Modal maxLength="10" handleAddCell={handleAddCellSmall} handleModalToggle={handleToggleModalSmall} modal={modalSmall} />}
   </li>
  </>
 );
}
