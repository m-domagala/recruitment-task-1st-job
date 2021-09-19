export default function Button(props) {
 return (
  <>
   <button onClick={props.onClick} className={`${props.addClass} button button__type-${props.btnType}`}>
    <div className={`button__type-${props.btnType}-sign`}></div>
   </button>
  </>
 );
}
