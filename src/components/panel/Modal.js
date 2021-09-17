import React, { useState } from 'react';

export default function Modal(props) {
 const [inputValue, setInputValue] = useState('');
 const [checkboxValue, setCheckboxValue] = useState(false);

 const handleInputChange = (e) => {
  setInputValue(e.target.value);
 };

 const handleCheckboxChange = () => {
  setCheckboxValue((prevValue) => !prevValue);
  console.log(checkboxValue);
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  props.handleAddCell(inputValue, checkboxValue);
  setInputValue('');
 };

 return (
  <>
   <div className="modal">
    <div className="modal__overlay"></div>
    <div className="modal__content">
     <form className="modal__form" type="submit" onSubmit={handleSubmit}>
      <label className="modal__checkbox-label">Advanced cell?</label>
      <input type="checkbox" className="modal__checkbox" onChange={handleCheckboxChange} />
      <input type="text" maxLength="22" className="modal__input" autoFocus value={inputValue} onChange={handleInputChange} />
     </form>
    </div>
   </div>
  </>
 );
}
