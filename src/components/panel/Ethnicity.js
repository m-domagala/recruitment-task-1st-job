import { useEffect, useState } from 'react';
import Button from './Button';
import CellSmall from './CellSmall';
import Modal from './Modal';
import { generateID } from './Panel';

export default function Ethnicity(props) {
 const [ethnicities, setEthnicities] = useState(props.initialEthnicities);
 const [smallModal, setSmallModal] = useState(false);

 useEffect(() => {
  if (props.firstRender === true) {
   props.handleFirstRender(false);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

 const toggleModal = () => {
  setSmallModal((prevValue) => !prevValue);
  document.body.classList.remove('active-modal');
 };

 const handleRemoveSmallCell = (id) => {
  setEthnicities((prevEthnicities) => {
   return prevEthnicities.filter((ethnicity) => ethnicity.id !== id);
  });
 };

 const handleAddCell = (inputValue) => {
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
      return <CellSmall key={ethnicity.id} ethnicity={ethnicity} handleRemoveSmallCell={handleRemoveSmallCell} />;
     })}
    </ul>

    <div className="ethnicity__border">
     <p className="ethnicity__and">And</p>
    </div>
    <div className="ethnicity__line"></div>
    <Button onClick={() => props.removeCell(props.info.id)} action={props.action} addClass={'ethnicity__button-1'} btnType="1" />
    <Button onClick={toggleModal} addClass={'ethnicity__button-2'} btnType="2" />
    {smallModal && <Modal maxLength="10" handleAddCell={handleAddCell} toggleModal={toggleModal} modal={smallModal} />}
   </li>
  </>
 );
}
