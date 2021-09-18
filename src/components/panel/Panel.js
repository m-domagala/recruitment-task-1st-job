import { useState } from 'react';
import Board from './Board';
import Button from './Button';
import Modal from './Modal';

export const generateID = () => {
 return '_' + Math.random().toString(36).substr(2, 9);
};

const initialInfos = [
 {
  id: generateID(),
  type: 'basicCell',
  title: 'Age 40+',
 },
 {
  id: generateID(),
  type: 'advancedCell',
  title: 'Ethnicity',
 },
 {
  id: generateID(),
  type: 'basicCell',
  title: 'Income yearly 45k USD+',
 },
];

export default function Panel() {
 const [infos, setInfos] = useState(initialInfos);
 const [modal, setModal] = useState(false);

 const toggleModal = () => {
  setModal((prevModal) => !prevModal);
  document.body.classList.remove('active-modal');
 };

 const handleAddCell = (inputValue, checkboxValue) => {
  setInfos((prevInfos) => {
   return [
    ...prevInfos,
    {
     id: generateID(),
     type: checkboxValue ? 'advancedCell' : 'basicCell',
     title: inputValue,
    },
   ];
  });
 };

 const handleRemoveCell = (targetID) => {
  setInfos((prevInfos) => {
   return prevInfos.filter((info) => info.id !== targetID);
  });
 };

 return (
  <>
   <main className="panel-container">
    <div className="panel">
     <div className="top-area">
      <div className="top-area__people">
       <p className="top-area__people-text">People</p>
      </div>
     </div>
     <Board infos={infos} removeCell={handleRemoveCell} />
     <div className="line-main"></div>
     <div className="bottom-area">
      <Button onClick={() => setModal((prevModal) => !prevModal)} addClass={'bottom-area__button'} btnType="3" />
     </div>
    </div>
    {modal && <Modal type="advanced" handleAddCell={handleAddCell} maxLength="15" toggleModal={toggleModal} modal={modal} />}
   </main>
  </>
 );
}
