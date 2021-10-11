export default function Button({ btnClassName, btnOnClick, btnType }) {
 return (
  <>
   <button onClick={btnOnClick} className={`${btnClassName} button button__type-${btnType}`}>
    <div className={`button__type-${btnType}-sign`}></div>
   </button>
  </>
 );
}
