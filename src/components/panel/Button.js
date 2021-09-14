export default function Button(props) {
 return (
  <>
   <button className={`${props.addClass} button button__type-${props.btnType}`}>
    <div className="sign"></div>
   </button>
  </>
 );
}
