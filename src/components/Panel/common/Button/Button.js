export default function Button({ btnClassName, btnOnClick, btnType }) {
 return (
  <>
   <button className={`${btnClassName} button button__type-${btnType}`} onClick={btnOnClick}>
    <div className={`button__type-${btnType}-sign`}></div>
   </button>
  </>
 );
}
