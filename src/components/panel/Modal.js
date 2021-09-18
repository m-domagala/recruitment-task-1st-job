import { useEffect, useRef, useState } from 'react';

export default function Modal(props) {
 const [inputValue, setInputValue] = useState('');
 const [checkboxValue, setCheckboxValue] = useState(false);
 const inputRef = useRef();

 document.body.classList.add('active-modal');

 useEffect(() => {
  const keyboardBehavior = (e) => {
   if (e.key === 'Escape') {
    props.toggleModal();
   } else if (e.key === 'Tab') {
    e.preventDefault();
   }
  };
  document.addEventListener('keydown', keyboardBehavior);
  return () => {
   document.removeEventListener('keydown', keyboardBehavior);
  };
 });

 const handleInputChange = (e) => {
  setInputValue(e.target.value);
 };

 const handleCheckboxToggle = () => {
  setCheckboxValue((prevModal) => !prevModal);
  inputRef.current.focus();
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  props.handleAddCell(inputValue, checkboxValue);
  setInputValue('');
  props.toggleModal();
 };

 return (
  <>
   <div className="modal">
    <div className="modal__overlay" onClick={props.toggleModal}></div>
    <div className="modal__content">
     <form className="modal__form" type="submit" onSubmit={handleSubmit}>
      <label className="checkbox-container">
       Advanced cell?
       <input type="checkbox" className="checkbox" onChange={handleCheckboxToggle} />
       <span className="checkbox-checkmark"></span>
      </label>

      <input ref={inputRef} type="text" maxLength={props.maxLength} className="modal__input" autoFocus value={inputValue} onChange={handleInputChange} />
     </form>
    </div>
   </div>
  </>
 );
}
