import { useState } from 'react';
import Board from './Board/Board';
import Button from './common/Button/Button';
import Modal from './common/Modal/Modal';

export const generateID = () => {
 return '_' + Math.random().toString(36).substr(2, 9);
};

const initialInfos = [
 {
  id: generateID(),
  type: 'cellMain',
  title: 'Age 40+',
 },
 {
  id: generateID(),
  type: 'cellAdvanced',
  title: 'Ethnicity',
 },
 {
  id: generateID(),
  type: 'cellMain',
  title: 'Income yearly 45k USD+',
 },
];

export default function Panel() {
 const [infos, setInfos] = useState(initialInfos);
 const [modal, setModal] = useState(false);

 const handleToggleModal = () => {
  setModal((prevModal) => !prevModal);
  document.body.classList.toggle('active-modal');
 };

 const handleAddCell = (inputValue, checkboxValue) => {
  setInfos((prevInfos) => {
   return [
    ...prevInfos,
    {
     id: generateID(),
     type: checkboxValue ? 'cellAdvanced' : 'cellMain',
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
      <div className="top-area__category">
       <p className="top-area__category-text">People</p>
      </div>
     </div>
     <Board handleRemoveCell={handleRemoveCell} infos={infos} />
     <div className="line-main"></div>
     <div className="bottom-area">
      <Button btnClassName={'bottom-area__button'} btnOnClick={handleToggleModal} btnType="3" />
     </div>
    </div>
    {modal && <Modal handleAddCell={handleAddCell} handleToggleModal={handleToggleModal} maxLength="22" />}
   </main>
  </>
 );
}
