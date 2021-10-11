import { useEffect, useRef, useState } from 'react';

export default function Modal({ handleAddCell, handleToggleModal, maxLength }) {
 const [inputValue, setInputValue] = useState('');
 const [checkboxValue, setCheckboxValue] = useState(false);
 const inputRef = useRef();

 useEffect(() => {
  const handleKeyboardBehavior = (e) => {
   if (e.key === 'Escape') {
    handleToggleModal();
   } else if (e.key === 'Tab') {
    e.preventDefault();
   }
  };
  document.addEventListener('keydown', handleKeyboardBehavior);
  return () => {
   document.removeEventListener('keydown', handleKeyboardBehavior);
  };
 });

 const handleChangeInput = (e) => {
  setInputValue(e.target.value);
 };

 const handleToggleCheckbox = () => {
  setCheckboxValue((prevValue) => !prevValue);
  inputRef.current.focus();
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  handleAddCell(inputValue, checkboxValue);
  setInputValue('');
  handleToggleModal();
 };

 return (
  <>
   <div className="modal">
    <div className="modal__overlay" onClick={handleToggleModal}></div>
    <div className="modal__content">
     <form className="modal__form" type="submit" onSubmit={handleSubmit}>
      <label className="checkbox-container">
       Advanced cell?
       <input type="checkbox" className="checkbox" onChange={handleToggleCheckbox} />
       <span className="checkbox-checkmark"></span>
      </label>
      <input ref={inputRef} type="text" maxLength={maxLength} className="modal__input" autoFocus value={inputValue} onChange={handleChangeInput} />
      <button className="modal__button-add" type="submit">
       Add
      </button>
     </form>
     <button className="modal__button-close" onClick={handleToggleModal}>
      X
     </button>
    </div>
   </div>
  </>
 );
}
