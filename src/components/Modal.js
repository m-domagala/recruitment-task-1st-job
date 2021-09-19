import { useEffect, useRef, useState } from 'react';

export default function Modal(props) {
 const [inputValue, setInputValue] = useState('');
 const [checkboxValue, setCheckboxValue] = useState(false);
 const inputRef = useRef();

 useEffect(() => {
  const handleKeyboardBehavior = (e) => {
   if (e.key === 'Escape') {
    props.handleToggleModal();
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
  setCheckboxValue((prevModal) => !prevModal);
  inputRef.current.focus();
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  props.handleAddCell(inputValue, checkboxValue);
  setInputValue('');
  props.handleToggleModal();
 };

 return (
  <>
   <div className="modal">
    <div className="modal__overlay" onClick={props.handleToggleModal}></div>
    <div className="modal__content">
     <form className="modal__form" type="submit" onSubmit={handleSubmit}>
      <label className="checkbox-container">
       Advanced cell?
       <input type="checkbox" className="checkbox" onChange={handleToggleCheckbox} />
       <span className="checkbox-checkmark"></span>
      </label>
      <input ref={inputRef} type="text" pattern="^[a-zA-Z1-9].*" required maxLength={props.maxLength} className="modal__input" autoFocus value={inputValue} onChange={handleChangeInput} />
      <button className="modal__button-add" type="submit">
       Add
      </button>
     </form>
     <button className="modal__button-close" onClick={props.handleToggleModal}>
      X
     </button>
    </div>
   </div>
  </>
 );
}
